import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKeg = (newKeg) => {
    const { dispatch } = this.props;
    const {beer, style, brewery, description, abv, price, pintsLeft} = newKeg;
    const action = {
      type: 'ADD_KEG',
      beer: beer,
      style: style,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      id: v4(),
      pintsLeft: pintsLeft
    }
    dispatch(action);
    this.setState({formVisibleOnPage:false});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { beer, style, brewery, description, abv, price, id, pintsLeft } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      beer: beer,
      style: style,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      id: id,
      pintsLeft: pintsLeft,
    }
    dispatch(action);
    this.setState({
      editing:false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellPint = (id) => {
    let tappingKeg = this.props.mainKegList[id];

    if (tappingKeg.pintsLeft === 0) {
      alert("This Keg is Tapped!");
      alert("Sorry for the alert!");
      alert("Alright, I'm just screwing with you now");
      alert("Sorry, again");
    } else {
      tappingKeg = tappingKeg.pintsLeft --;

      this.setState({
        tappingKeg: tappingKeg
      });
    }
  }

  handleFreshKeg = (id) => {
    let freshKeg = this.props.mainKegList[id];

    freshKeg.pintsLeft = 124;

    this.setState({
      freshKeg: freshKeg
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
      onClickingSellPint={this.handleSellPint}
      onClickingFreshKeg={this.handleFreshKeg}
      />
      buttonText = "Back to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKeg} />
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList kegList={this.props.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add a Keg"
    }
    return (
      <>
      {currentlyVisibleState}
      <button id="friendButton" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
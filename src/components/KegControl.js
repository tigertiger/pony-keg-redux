import React from "react";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing:false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing:false
      });
    } else {
      const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
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
      pintsLeft: pintsLeft,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({editing:true});
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
    this.setState({selectedKeg: null,
    editing:false});
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

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Back to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      keg = {this.state.selectedKeg} 
      onClickingSellPint={this.handleSellPint}
      onClickingFreshKeg={this.handleFreshKeg}
      onClickingEdit={this.handleEditClick}
      onClickingDelete={this.handleDeletingKeg}
      />
      buttonText = "Back to Keg List";
    } else if (this.props.formVisibleOnPage) {
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
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
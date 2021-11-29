import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { v4 } from 'uuid';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      mainKegList: [
        {
          beer: 'Blind Pig',
          style: 'IPA',
          brewery: 'Russian River',
          description: 'Full-bodied, very hoppy, with citrus, pine, fruity notes, and a nice dry, bitter finish!',
          abv: '6.25',
          price: '319',
          id: v4(),
          pintsLeft: 124
        },
        {
          beer: 'Pallet Jack',
          style: 'IPA',
          brewery: 'Barley Brown\'s',
          description: 'Multiple dry hop additions deliver an awesome hop aroma filled with citrus, tropical fruit, and a touch of pine. The light body has just enough malt complexity to balance the hops. Multi time GABF medalist.',
          abv: '7.2',
          price: '250',
          id: v4(),
          pintsLeft: 124
        },
        {
          beer: 'German Pale Ale',
          style: '',
          brewery: 'Rosenstadt',
          description: 'Rosenstadt German Pale Ale is hop-forward in the American fashion. German Polaris, Mandarina Bavaria and Amarillo hops have some American heritage, and create an unusual flavor profile with notes of tangerine, orange, and mint.    ',
          abv: '5.4',
          price: '250',
          id: v4(),
          pintsLeft: 124
        }
      ],
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
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
    formVisibleOnPage:false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellPint = () => {
    let tappingKeg = this.state.mainKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

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

  handleFreshKeg = () => {
    let freshKeg = this.state.mainKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

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
      <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
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

export default KegControl;
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({beer: event.target.beer.value, style: event.target.style.value, brewery: event.target.brewery.value, description: event.target.description.value, abv: event.target.abv.value, pintsLeft: 124, price: event.target.price.value, id: v4()});
  }

  return(
    <>
    <ReusableForm
      formSubmissionHandler = {handleNewKegFormSubmission}
      buttonText = "Add a Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
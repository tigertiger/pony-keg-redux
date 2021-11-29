import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({beer: event.target.beer.value, style: event.target.style.value, brewery: event.target.brewery.value, description: event.target.description.value, abv: event.target.abv.value, pintsLeft: 124, price: event.target.price.value, id: v4()});
  }

  return(
    <>
    <div className="container">
      <form id="newKeg" onSubmit={handleNewKegFormSubmission}>
        <input
        type="text"
        name="beer"
        placeholder="Beer Name" /><br />

        <input
        type="text"
        name="style"
        placeholder="Beer Style" /><br />

        <input
        type="text"
        name="brewery"
        placeholder="Brewery Name" /><br />

        <textarea
        name="description"
        placeholder="Description & Notes" /><br />

        <input
        type="double"
        name="abv"
        placeholder="Alcohol By Volume" /><br />

        <input
        type="double"
        name="price"
        placeholder="Price Per Keg" /><br />
        <button type="submit">Add Keg</button>
      </form>
    </div>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <div className="container">
      <form onSubmit={props.formSubmissionHandler}>
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
            <button type="submit">{props.buttonText}</button>
          </form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
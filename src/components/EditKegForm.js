import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({beer: event.target.beer.value, style: event.target.style.value, brewery: event.target.brewery.value, description: event.target.description.value, abv: event.target.abv.value, pintsLeft: event.target.pintsLeft.value, price: event.target.price.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <div className="container">
        <ReusableForm
          formSubmissionHandler={handleEditKegFormSubmission}
          buttonText="Update Keg" />
      </div>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  obEditKeg: PropTypes.func
};

export default EditKegForm;
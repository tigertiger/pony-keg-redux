import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <>
    <div id="kegGrid">
      {Object.values(props.kegList).map((keg) =>
      <Keg 
      whenKegClicked = {props.onKegSelection}
      beer={keg.beer}
      style={keg.style}
      brewery={keg.brewery}
      description={keg.description}
      abv={keg.abv}
      pintsLeft={keg.pintsLeft}
      price={keg.price}
      id={keg.id}
      key={keg.id} />
      )}
    </div>
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
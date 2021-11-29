import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg} = props;

  return(
    <>
      <div class="container">
        <div className="card">
          <h3>{keg.beer} {keg.style}</h3>
          <h4>{keg.brewery}</h4>
          <p>{keg.description}</p>
          <p>ABV: {keg.abv} %</p>
          <p>Price Per Keg: $ {keg.price}</p>
          <p>Price Per Pint: $ {((keg.price/124)*3).toFixed(2)}</p>
          <p>Pints Left in Keg: {keg.pintsLeft}</p>
          <button id="sellPint" onClick={props.onClickingSellPint}>Sell Pint</button>
          <button id="freshKeg" onClick={props.onClickingFreshKeg}>Fresh Keg</button>
        </div>
      </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func,
  onClickingFreshKeg: PropTypes.func
};

export default KegDetail;
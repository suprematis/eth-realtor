import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {hash, lon, lat, number, street, postcode} = this.props.details;
    return (
      <div className="col s6 m6 l6">
        <div className="card">
          <div className="card-image">
            <img className="circle responsive-image" alt="" src="https://placeimg.com/300/300/arch" />
          </div>
          {/* <div className="card-stacked"> */}
          <div className="card-content">
            <p className="card-title grey-text text-darken-4 right flow-text">Property ID: {hash}</p>
            <i className="material-icons small right">home</i>
            <span className="flow-text">{number} {street}</span>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12">
                <button className="btn-small" onClick={() => this.props.addToOrder(this.props.index)}>Locate on Map</button>
              </div>
              <div className="col s12">
                <button className="btn-small offset-s1">Details</button>
                <span className="white-text badge red">Sold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property ;

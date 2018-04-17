import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {hash, lon, lat, number, street, postcode, imgurl} = this.props.details;
    return (
      <div className="col s6 m6 l6">
        <div className="card">
          <div className="card-image">
            <img className="responsive-image" alt="" src={imgurl}/>
          </div>
          {/* <div className="card-stacked"> */}
          <div className="card-content">
            <div className="row">
              <div className="col s12">
                <div className="col s2 right">
                  <i className="material-icons small">home</i>
                </div>
                <div className="col s10 right">
                  <p className="card-title grey-text text-darken-4 flow-text">Property ID: {hash}</p>
                </div>
                <div className="col s12">
                  <p className="flow-text">{number} {street}</p>
                </div>
              </div>
            </div>
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

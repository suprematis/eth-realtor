import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {hash, lon, lat, number, street, postcode} = this.props.details;
    return (
      <div className="col s12 m12 l12">
        <div className="card-panel grey lighten-5 z-depth-1 col s12">
          <div className="row valign-wrapper">
            <div className="card-image col s3">
              <img className="circle responsive-image" alt="" src="https://placeimg.com/100/100/arch" />
            </div>
            {/* <div className="card-stacked"> */}
            <div className="card-content col s9">
              <div>
                <div className="col s11"><span className="card-title grey-text text-darken-4 right">Property ID: {hash}</span></div>
                <div className="col s1"><i className="material-icons small right">home</i></div>
                <div className="col s12">
                  <span className="flow-text">{number} {street}</span>
                </div>
                {/* </div> */}
                <div className="card-action">
                  <button className="col s4 btn-small" onClick={() => this.props.addToOrder(this.props.index)}>Locate on Map</button>
                  <button className="col s4 btn-small offset-s1">Details</button>
                  <span className="white-text badge red">Sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Property ;

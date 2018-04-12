import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {hash, lon, lat, number, street, postcode} = this.props.details;
    return (
      <div className="col s12 m12 l12">
        <div className="card horizontal">
          <div className="card-image">
            <img className="activator" alt="" src="https://placeimg.com/250/250/arch" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="col s1"><i className="material-icons small">home</i></div>
              <div className="col s11"><span className="card-title grey-text text-darken-4 right">Property ID: {hash}</span></div>
              <div className="col s12">
                <span>{number} {street}</span><br/>
                <span>{postcode}</span>
              </div>
            </div>
            <div className="card-action">
              <button onClick={() => this.props.addToOrder(this.props.index)}>Locate on Map</button>
              <span className="white-text badge red">Sold</span>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property ;

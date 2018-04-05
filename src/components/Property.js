import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {HASH, LON, LAT, NUMBER, STREET, POSTCODE} = this.props.details;
    return (
      // <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img className="activator" alt="" src="https://placeimg.com/320/240/arch" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{NUMBER} {STREET}</span>
              <li className="menu-property">
              <p>
                <span>Longitude: {LON}</span><br/>
                <span>Latitude: {LAT}</span><br/>
                <span>{NUMBER} {STREET}</span><br/>
                <span>Zipcode: {POSTCODE}</span>
              </p>
              {/* <h3 className="property-name">
                  <span className="price"></span>
              </h3> */}
            </li>
          </div>
        </div>
        </div>
      // </div>
        )
  }
}

export default Property ;

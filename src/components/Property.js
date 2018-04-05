import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  render() {
    const {HASH, LON, LAT, NUMBER, STREET, POSTCODE} = this.props.details;
    return (
      <div className="property-card col s12 m6 l6">
        <div className="card">
          <div className="card-image">
            <img className="activator" alt="" src="https://placeimg.com/320/240/arch" />
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col s1"><i className="material-icons small">home</i></div>
              <div className="col s11"><span className="card-title grey-text text-darken-4">{NUMBER} {STREET}</span></div>
            </div>
            <li className="menu-property">
              <p>
                {/* <span>Longitude: {LON}</span><br/>
                <span>Latitude: {LAT}</span><br/> */}
                <span>{NUMBER} {STREET}</span><br/>
                <span>{POSTCODE}</span><br/>
                <button onClick={this.props.centerPropertyGoogleMap}>Locate on Map</button>
              </p>
              {/* <h3 className="property-name">
                  <span className="price"></span>
              </h3> */}
            </li>
          </div>
        </div>
      </div>
        )
  }
}

export default Property ;

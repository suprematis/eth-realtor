import React from 'react';
import { formatPrice } from "../helpers";
// import * as materialize from "../materialize";

class Property extends React.Component {
  handleClick = () => {
    this.props.centerPropertyGoogleMap(this.props.index);
  }
  render() {
    const {HASH, LON, LAT, NUMBER, STREET, POSTCODE} = this.props.details;
    return (
<div className="col s12 m12 l12">
  <div className="card horizontal">
    <div className="card-image">
      <img className="activator" alt="" src="https://placeimg.com/100/250/arch" />
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <div className="col s1"><i className="material-icons small">home</i></div>
        <div className="col s11"><span className="card-title grey-text text-darken-4 right">Property ID: {HASH}</span></div>
        <div className="col s12">
          <span>{NUMBER} {STREET}</span><br/>
          <span>{POSTCODE}</span>
        </div>
      </div>
      <div className="card-action">
        <button className="s12 m12 l12" onClick={this.handleClick}>Locate on Map</button>
        <span className="white-text badge red">Sold</span>

      </div>
    </div>
  </div>
</div>



  )
  }
  }

export default Property ;

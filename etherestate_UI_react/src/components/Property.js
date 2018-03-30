import React from 'react';
import { formatPrice } from "../helpers";

class Property extends React.Component {
  render() {
    const {HASH, LAT} = this.props.details;
    return (
      <li className="menu-property">
        <img src={LAT} alt={LAT} />
        <h3 className="property-name">{HASH}
          <span className="price">{formatPrice(LAT)}</span>
        </h3>
        <p>{LAT}</p>
          </li>
          )
  }
}

export default Property ;

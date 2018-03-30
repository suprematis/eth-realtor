import React from 'react';

class Property extends React.Component {
  render() {
    const {image, name, price, description, status} = this.props.details;
    return (
      <li className="menu-property">
        <img src={image} alt={name} />
      </li>
    )
  }
}

export default Property ;

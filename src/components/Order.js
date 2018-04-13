import React from 'react';

var inLine = {
  'font-size': '12px'
}

class Order extends React.Component {
  renderOrder = key => {
    const property = this.props.properties[key];
    return <li>
      {property.lat} {property.lon}
    </li>;
  };
  render() {
    const orderIds = Object.keys(this.props.order);

    return (
      <div className="order">
        <h2>Location</h2>
        <ul style={inLine}>{orderIds.map(this.renderOrder)}</ul>
      </div>
    );
  }
}

export default Order;

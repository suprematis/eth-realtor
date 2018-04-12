import React from 'react';

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);

    return (
      <div className="order">
        <h2>Order</h2>
        {orderIds}
      </div>
    );
  }
}

export default Order;

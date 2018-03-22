import React from 'react';

class MarketPicker extends React.Component {
  render() {
    return (
      <form className="market-selector">
        <h2>Please Enter A Housing Market</h2>
        <input type="text" required placeholder="Market Name" />
        <button type="submit">Proceed to Market</button>
      </form>
    )
  }
}

export default MarketPicker;

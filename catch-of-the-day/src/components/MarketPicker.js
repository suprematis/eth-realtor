import React from 'react';
import { getFunName } from "../helpers";
class MarketPicker extends React.Component {
  UserInput = React.createRef();

  goToMarket = event => {
    //1. Prevent the form from submitting
    event.preventDefault();
    //2. get the text from that input
    // console.log(this.UserInput.value.value);
    const marketName = this.UserInput.value.value
    //3. Change the page to /market/any-inputed-value
    this.props.history.push(`/market/${marketName}`);
  };
  render() {
    return (
      <form className="market-selector" onSubmit={this.goToMarket}>
        <h2>Please Enter A Housing Market</h2>
        <input
          type="text"
          ref={this.UserInput}
          required
          placeholder="Market Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Proceed to Market</button>
      </form>
    )
  }
}

export default MarketPicker;

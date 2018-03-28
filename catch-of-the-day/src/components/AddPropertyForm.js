import React from 'react';

class AddPropertyForm extends React.Component {
  createProperty = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    console.log("Adding Properties")
  }
  render() {
    return (
        <form className="property-edit" onSubmit={this.createProperty}>
          <input name="municipal-street-address" type="text" placeholder="municipal-street-address" />
          <input name="city-block" type="text" placeholder="city-block" />
          <input name="county" type="text" placeholder="county" />
          <input name="city" type="text" placeholder="city" />
          <input name="earnest-money-deposit" type="text" placeholder="earnest-money-deposit" />
          <input name="deposit-delivery-date" type="text" placeholder="deposit-delivery-date" />
          <select name="status">
            <option value="On The Market">On The Market</option>
            <option value="Sold">Sold</option>
            <option value="Closing">Closing</option>
          </select>
          <button type="submit">+ Add Property</button>
            </form>
    );
  }
}

export default AddPropertyForm;

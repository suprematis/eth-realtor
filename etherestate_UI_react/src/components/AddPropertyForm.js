import React from 'react';

class AddPropertyForm extends React.Component {
  msaRef = React.createRef();
  cbRef = React.createRef();
  counRef = React.createRef();
  ciRef = React.createRef();
  emdRef = React.createRef();
  dddateRef = React.createRef();

  createProperty = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    const property = {
      msa: this.msaRef.value.value,
      cb: this.cbRef.value.value,
      coun: this.counRef.value.value,
      ci: this.ciRef.value.value,
      emd: parseFloat(this.emdRef.value.value),
      dddate: this.dddateRef.value.value,
    };
    this.props.addProperty(property);
    console.log(this);
  };
  render() {
    return (
        <form className="property-edit" onSubmit={this.createProperty}>
          <input name="msa" ref={this.msaRef} type="text" placeholder="Municipal Street Address" />
          <input name="cb" ref={this.cbRef} type="text" placeholder="City Block" />
          <input name="coun" ref={this.counRef} type="text" placeholder="County" />
          <input name="ci" ref={this.ciRef} type="text" placeholder="City" />
          <input name="emd" ref={this.emdRef} type="text" placeholder="Earnest Money Deposit" />
          <input name="dddate" ref={this.dddateRef} type="text" placeholder="Deposit Delivery Date" />
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

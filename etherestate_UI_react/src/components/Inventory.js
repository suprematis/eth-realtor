import React from 'react';
import AddPropertyForm from './AddPropertyForm';
class Inventory extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Add Property</h4>
        <h5>Home Details</h5>
        <AddPropertyForm addProperty={this.props.addProperty} />
        <button className="waves-effect waves-light btn" onClick={this.props.loadSampleProperties}>Load Samples Properties</button>
          </div>
    );
  }
}

export default Inventory;

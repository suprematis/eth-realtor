import React from 'react';
import AddPropertyForm from './AddPropertyForm';
class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Add Property</h2>
        <h3>Home Details</h3>
        <AddPropertyForm addProperty={this.props.addProperty} />
        <button onClick={this.props.loadSampleProperties}>Load Samples Properties</button>
          </div>
    );
  }
}

export default Inventory;

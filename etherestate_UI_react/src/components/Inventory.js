import React from 'react';
import AddPropertyForm from './AddPropertyForm';
class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Add Property</h2>
        <h3>Home Details</h3>
        <AddPropertyForm />
          </div>
    );
  }
}

export default Inventory;

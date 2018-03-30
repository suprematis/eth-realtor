import React from 'react';
import AddPropertyForm from './AddPropertyForm';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h4>ETHERESTATE</h4>
        <h5>Dashboard</h5>
        <button className="waves-effect waves-light btn" onClick={this.props.loadSampleProperties}>Load Samples Properties</button>
      </div>
    );
  }
}

export default Dashboard;

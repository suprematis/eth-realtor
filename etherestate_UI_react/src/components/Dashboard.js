import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="white-text">
        <h4>ETHERESTATE</h4>
        <ul className="collection blue darken-4">
          <li className="collection-item blue darken-4">Dashboard</li>
          <li className="collection-item blue darken-4">Add Property</li>
          <li className="collection-item blue darken-4">Browse Properties</li>
        </ul>
        <button className="waves-effect waves-light btn-large" onClick={this.props.loadSampleProperties}>Load Sample Properties</button>
      </div>
    );
  }
}

export default Dashboard;

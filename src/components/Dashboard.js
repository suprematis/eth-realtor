import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
<div>

  <div className="white-text dashboard">
    <h4>ETHERESTATE</h4>
    <div className="collection">
      <a className="collection-item" href="#!" onClick={this.props.loadSampleProperties}>Load Sample Properties</a>
      {/* <a className="waves-effect waves-light btn-large" onClick={this.props.centerPropertyGoogleMap}>Map</a> */}
      {/* <ul className="collection blue darken-4">
        <li className="collection-item blue darken-4">Add Property</li>
        <li className="collection-item blue darken-4">Browse Properties</li>
      </ul> */}
    </div>
  </div>
</div>
  );
  }
}

export default Dashboard;

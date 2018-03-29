import React from 'react';
import Header from "./Header"
import Inventory from "./Inventory"
import Request from "./Request"
// import Order from "./Order"

class App extends React.Component {
  state ={
    properties: {},
    request: {}
  };
  addProperty = property => {
    console.log("Adding Property")
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <Header tagline="California" />
        <Request />
        <Inventory addProperty={this.addProperty} />
      </div>
    );
  }
}

export default App;

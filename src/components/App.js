import React from 'react';
import Dashboard from "./Dashboard"
import Header from "./Header";
import Inventory from "./Inventory";
import sampleProperties from "../sample-properties"
// import Request from "./Request";
import Property from "./Property";
import GoogleMaps from "./GoogleMaps"
// import Order from "./Order"

class App extends React.Component {
  state = {
    properties: {},
    request: {},
    locate: {}
  };
  addProperty = property => {
    // 1. Take a copy
    const properties = { ...this.state.properties };
    // 2. Add our new property to the properties variable
    properties[`property${Date.now()}`] = property;
    // 3. Set the new properties object to state
    this.setState({properties})
  };
  loadSampleProperties = () => {
    this.setState({ properties: sampleProperties });
  };
  centerPropertyGoogleMap = (key) => {
    // alert("Loading Map");
    // 1. take a copy of state
  const locate = { ...this.state.locate };
    // 2. Pass location to locate
  locate[key] = 1 ;
    // 3. Call setState to update our state object
  this.setState({ locate });

  };
  render() {
    return (
      <div className="property-browser">
        <div className="row">
          <div className="col s12 m4 l2 royal-purple">
            <Dashboard
              addProperty={this.addProperty}
              loadSampleProperties={this.loadSampleProperties}
            />
          </div>
          <div className="property-listing col s12 m8 l6">
            <Header locality="City of Palo Alto" />
            <ul className="row properties">
              {Object.keys(this.state.properties).map(key => (
                <Property centerPropertyGoogleMap={this.centerPropertyGoogleMap}
                  key={key}
                  index={key}
                  details={this.state.properties[key]} />
              ))}
            </ul>
          </div>

          <div className="col s12 m8 l4">
            {/* <Inventory
                addProperty={this.addProperty}
            loadSampleProperties={this.loadSampleProperties} */}
            <GoogleMaps />
          </div>

          {/* Commenting Request Section */}
          {/* <Request /> */}

        </div>
      </div>
        );
        }
        }

export default App;

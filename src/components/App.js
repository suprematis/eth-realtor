import React from 'react';
import Dashboard from "./Dashboard";
import Header from "./Header";
import Inventory from "./Inventory";
import sampleProperties from "../sample-properties";
// import lat from "../lat";
// import MapCont from "./MapCont";
// import Request from "./Request";
import Property from "./Property";
// import GoogleMaps from "./GoogleMaps";
import GoogleMaps from "./GoogleMaps";
import Order from "./Order"

var inLine = {
  'font-size': '12px'
}

class App extends React.Component {
  state = {
    properties: {},
    request: {},
    location: {},
    order: {}
  };
  addProperty = property => {
    // 1. Take a copy
    const properties = { ...this.state.properties };
    // 2. Add our new property to the properties variable
    properties[`property${Date.now()}`] = property;
    // 3. Set the new properties object to state
    this.setState({properties})
  };
  addToOrder = key => {
    // 1. take a copy of setState
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  loadSampleProperties = () => {
    this.setState({ properties: sampleProperties });
  };
  centerPropertyGoogleMap = () => {
    this.setState({ locate: sampleProperties });
  };

  render() {
    return (
        <div className="row property-browser">
          <div className="col s12 m4 l2 royal-purple">
            <Dashboard
              // addProperty={this.addProperty}
              loadSampleProperties={this.loadSampleProperties}
              // centerPropertyGoogleMap={this.centerPropertyGoogleMap}
            />
          </div>
          <div className="property-listing col s12 m6 l6">
            <Header />
            <div className="row properties">
              <div className="col s12 m12 l12">
                <h3 className="col s12 m12 l12">Properties available in the city of Palo Alto</h3>
                {Object.keys(this.state.properties).map(key => (
                  <Property
                    key={key}
                    index={key}
                    // latitude={this.props.details.lat}
                    addToOrder={this.addToOrder}
                    details={this.state.properties[key]} />
                ))}
              </div>
            </div>
          </div>
          <div className="map-details col s12 m8 l4">
            {/* <Inventory
                addProperty={this.addProperty}
            loadSampleProperties={this.loadSampleProperties} */}
            <div>
              <GoogleMaps
                location={this.state.location}
                properties={this.state.properties}
              />
            </div>
            <div className="row">
              {/* <div className="col s12">
                <div className="card">
                  <div className="card-content">
                <span className="card-title">Property Details</span>
                <p style={inLine}>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                  </div>
                </div>
              </div> */}
              <div className="col s12">
                <Order
                  order={this.state.order}
                  properties={this.state.properties}
                />
              </div>
            </div>
          </div>


          {/* Commenting Request Section */}
          {/* <Request /> */}

        </div>

        );
        }
        }

export default App;

import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="col s12 m12 l12">{text}</div>;

class GoogleMaps extends React.Component {
  static defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11,
  lat: 59.955413,
  lng: 30.337844
};
  renderOrder = key => {
    return <li>{key}</li>;
  };
  render() {
    const propertyIds = Object.keys(this.props.properties)
    // const latitudes = properties.filter(property => (property.lat)
    // const {hash, lon, lat, number, street, postcode} = this.props.location;
    // const locationIds = Object.keys(this.props.location);
    // const total = locationIds.reduce((prevTotal, key) => {
    //   const locate = this.props.location[key];
    // return prevTotal;
    return (
      <div>
        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDW28i708MiDFiJ96Ghl1HiNrXdkVS78yw' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            lat={this.props.lat}
            lng={this.props.lng}
            text={'Kreyser Avrora'}>

          </GoogleMapReact>


        </div>
        {/* {latitudeIds.map(this.renderOrder)} */}
      </div>
    );

      }
    }


export default GoogleMaps ;

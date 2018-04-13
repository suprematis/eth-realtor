import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="col s12 m12 l12">{text}</div>;

class GoogleMaps extends React.Component {
  static defaultProps = {
  center: {
    lat: 37.3922376,
    lng: -122.1089226
  },
  zoom: 12,
  lat: 59.955413,
  lng: 30.337844
};
renderOrder = key => {
  const property = this.props.properties[key];
  return <li>
    {property.lat} {property.lon}
  </li>;
};
  render() {
    const orderIds = Object.keys(this.props.order);
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
          <ul>{orderIds.map(this.renderOrder)}</ul>

        </div>
        {/* {latitudeIds.map(this.renderOrder)} */}
      </div>
    );

      }
    }


export default GoogleMaps ;

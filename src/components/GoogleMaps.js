import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="col s12 m12 l12">{text}</div>;

class GoogleMaps extends React.Component {
  static defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};
  render() {
    const {HASH, LON, LAT, NUMBER, STREET, POSTCODE} = this.props.details;
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDW28i708MiDFiJ96Ghl1HiNrXdkVS78yw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={LAT}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
        }
        }

export default GoogleMaps ;

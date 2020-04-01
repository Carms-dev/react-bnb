import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import bootstrapURLKeys from '../../data/key';

import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      seededFlats: flats,
      zoom: 11
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  center() {
    const { selectedFlat } = this.state;
    return ({
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    });
  }

  render() {
    const { selectedFlat, seededFlats, zoom } = this.state;

    return (
      <div>
        <FlatList
          flats={seededFlats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: bootstrapURLKeys }}
            defaultCenter={this.center()}
            defaultZoom={zoom}
          >
            <Marker
              lat={selectedFlat.lat}
              lng={selectedFlat.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

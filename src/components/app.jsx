import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import Marker from './marker';
import flats from '../../data/flats';
import bootstrapURLKeys from '../../data/key';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      zoom: 11
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  };

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { selectedFlat, zoom } = this.state;
    return (
      <div>
        <FlatList flats={flats} selectedFlat={selectedFlat} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: bootstrapURLKeys }}
            defaultCenter={this.center()}
            defaultZoom={zoom}
          >
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} text="selected" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

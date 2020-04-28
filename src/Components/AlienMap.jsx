import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class AlienMap extends Component {
  state = { activeSite: {} };

  regions = {
    Africa: [4.227269, 21.418349, 3],
    Asia: [49.787471, 91.654214, 2.5],
    Australasia: [-18.542117, 138.2646, 3],
    Europe: [50.224367, 13.845184, 4],
    NorthAmerica: [47.751328, -103.310138, 2.5],
    SouthAmerica: [-19.369454, -58.006624, 2.5],
  };

  setActiveSite = (meteorite) => {
    this.setState({ activeSite: meteorite });
  };

  render() {
    const { selectedRegion, meteorites } = this.props;
    const { activeSite } = this.state;
    return (
      <Map
        id="map"
        center={[
          this.regions[selectedRegion][0],
          this.regions[selectedRegion][1],
        ]}
        zoom={this.regions[selectedRegion][2]}
      >
        {meteorites.map((meteorite) => {
          return (
            <div key={meteorite.id}>
              <Marker
                position={[meteorite.reclat, meteorite.reclong]}
                onClick={() => {
                  this.setActiveSite(meteorite);
                }}
              />
              {activeSite.name === meteorite.name && (
                <Popup position={[meteorite.reclat, meteorite.reclong]}>
                  <h2>{meteorite.name}</h2>
                </Popup>
              )}
            </div>
          );
        })}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
}

export default AlienMap;

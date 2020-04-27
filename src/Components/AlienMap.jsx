import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function AlienMap({ selectedRegion }) {
  const regions = {
    Africa: [11.405995, 21.635887, 4],
    Antartica: [-84.813907, 22.737577, 4],
    Asia: [49.787471, 91.654214, 4],
    Australasia: [-18.542117, 138.2646, 4],
    Europe: [50.224367, 13.845184, 4],
    NorthAmerica: [47.751328, -103.310138, 4],
    SouthAmerica: [-19.369454, -58.006624, 4],
  };
  console.log(regions[selectedRegion][0]);
  return (
    <Map
      id="map"
      center={[regions[selectedRegion][0], regions[selectedRegion][1]]}
      zoom={regions[selectedRegion][2]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default AlienMap;

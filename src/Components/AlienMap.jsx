import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function AlienMap({ selectedRegion, meteorites }) {
  const regions = {
    Africa: [4.227269, 21.418349, 3],
    Asia: [49.787471, 91.654214, 2.5],
    Australasia: [-18.542117, 138.2646, 3],
    Europe: [50.224367, 13.845184, 4],
    NorthAmerica: [47.751328, -103.310138, 2.5],
    SouthAmerica: [-19.369454, -58.006624, 2.5],
  };

  return (
    <Map
      id="map"
      center={[regions[selectedRegion][0], regions[selectedRegion][1]]}
      zoom={regions[selectedRegion][2]}
    >
      {meteorites.map((meteorite) => {
        console.log(meteorite);
        return (
          <Marker
            key={meteorite.id}
            position={[meteorite.reclat, meteorite.reclong]}
          />
        );
      })}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default AlienMap;

import React from "react";
import { findRegion } from "../Utils/utils";

function AlienList({ selectedRegion, meteorites, setActiveSite }) {
  const modifiedMeteorites = findRegion(meteorites);
  const selectedMeteorites = modifiedMeteorites.filter((meteorite) => {
    if (meteorite.region === selectedRegion) return true;
    return false;
  });
  return (
    <ul className="list">
      {selectedMeteorites.map((meteorite) => {
        return (
          <li key={meteorite.id} onClick={() => setActiveSite(meteorite)}>
            {meteorite.name}
          </li>
        );
      })}
    </ul>
  );
}

export default AlienList;

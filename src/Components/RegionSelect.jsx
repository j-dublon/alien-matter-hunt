import React from "react";

const RegionSelect = ({ handleRegionSelect }) => {
  return (
    <form>
      <select className="regions" name="regions" onChange={handleRegionSelect}>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Australasia">Australasia</option>
        <option value="Europe">Europe</option>
        <option value="NorthAmerica">North America</option>
        <option value="SouthAmerica">South America</option>
      </select>
    </form>
  );
};

export default RegionSelect;

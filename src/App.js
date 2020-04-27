import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import AlienMap from "./Components/AlienMap";

class App extends Component {
  state = {
    meteoriteLandings: {},
    selectedRegion: "Europe",
  };

  render() {
    return (
      <div className="App">
        <Header />
        <form>
          <select id="cars" name="cars">
            <option value="Africa">Africa</option>
            <option value="Antartica">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Australasia">Australasia</option>
            <option value="Europe">Europe</option>
            <option value="NorthAmerica">North America</option>
            <option value="SouthAmerica">South America</option>
          </select>
        </form>
        <AlienMap selectedRegion={this.state.selectedRegion} />
      </div>
    );
  }
}

export default App;

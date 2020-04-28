import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import AlienMap from "./Components/AlienMap";
import AlienList from "./Components/AlienList";
import axios from "axios";

class App extends Component {
  state = {
    meteoriteLandings: [],
    selectedRegion: "Africa",
  };

  componentDidMount = () => {
    axios
      .get("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=50")
      .then((response) => {
        this.setState((currentState) => {
          return {
            ...currentState.selectedRegion,
            meteoriteLandings: response.data,
          };
        });
      });
  };

  handleRegionSelect = (event) => {
    const { value } = event.target;
    this.setState((currentState) => {
      return {
        ...currentState.meteoriteLandings,
        selectedRegion: value,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header className="header" />
        <form>
          <select
            className="regions"
            name="regions"
            onChange={this.handleRegionSelect}
          >
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Australasia">Australasia</option>
            <option value="Europe">Europe</option>
            <option value="NorthAmerica">North America</option>
            <option value="SouthAmerica">South America</option>
          </select>
        </form>
        <main className="main">
          <AlienMap
            selectedRegion={this.state.selectedRegion}
            meteorites={this.state.meteoriteLandings}
          />
          <AlienList
            selectedRegion={this.state.selectedRegion}
            meteorites={this.state.meteoriteLandings}
          />
        </main>
      </div>
    );
  }
}

export default App;

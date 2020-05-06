import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import AlienMap from "./Components/AlienMap";
import axios from "axios";
import RegionSelect from "./Components/RegionSelect";

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
        <RegionSelect handleRegionSelect={this.handleRegionSelect} />
        <AlienMap
          selectedRegion={this.state.selectedRegion}
          meteorites={this.state.meteoriteLandings}
        />
      </div>
    );
  }
}

export default App;

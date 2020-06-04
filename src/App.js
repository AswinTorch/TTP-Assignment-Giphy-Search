import React, { Component } from "react";
import "./App.css";
import GIFCard from "./components/GIFCard";
import SearchField from "./components/SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    return (
      <div className="container pt-4">
        <h1>GIPHY Search</h1>
        <SearchField />
        <GIFCard imageSource="" />
      </div>
    );
  }
}

export default App;

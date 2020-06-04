import React, { Component } from "react";
import "./App.css";
import GIFCard from "./components/GIFCard";
import SearchField from "./components/SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  render() {
    return (
      <div className="container pt-4">
        <h1>GIPHY Search</h1>
        <SearchField />
        <GIFCard />
      </div>
    );
  }
}

export default App;

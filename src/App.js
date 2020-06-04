import React, { Component } from "react";
import "./App.css";
import GIFCard from "./components/GIFCard";
import SearchField from "./components/SearchField";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  // On app load
  componentDidMount() {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    // Fetches trending gifs
    axios
      .get(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=9`)
      .then((response) => {
        // Handles success
        const results = response.data.data;
        console.log(results);
        // Sets data in state
        this.setState({
          results,
        });
      })
      .catch((error) => {
        // Handles error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container pt-4">
        <h1>GIPHY Search</h1>
        <SearchField />
        {this.state.results.length !== 0 ? (
          <div className="row">
            {this.state.results.map((result) => {
              return (
                <GIFCard
                  key={result.id}
                  imageSource={result.images.downsized_medium.url}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p>Loading Trending Gifs...</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

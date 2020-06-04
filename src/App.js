import React, { Component } from "react";
import "./App.css";
import GIFCard from "./components/GIFCard";
import SearchField from "./components/SearchField";
import axios from "axios";

// API KEY
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const trendingEndpoint = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=9`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      results: [],
    };
  }

  // Helper function to fetch data through axios
  fetchData = (endpoint) => {
    axios
      .get(endpoint)
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
  };

  // On app load
  componentDidMount() {
    this.fetchData(trendingEndpoint);
  }

  // Function to search for GIFs bases on user input
  search = (event) => {
    const searchTerm = event.target.value;
    const searchEndpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=9`;
    this.fetchData(searchEndpoint);
  };

  render() {
    return (
      <div className="container pt-4">
        {/* Header */}
        <h1 className="pb-4">GIPHY Search</h1>

        {/* Search Section */}
        <SearchField input={this.state.input} search={this.search} />

        {/* GIFs Section */}
        {this.state.results.length !== 0 ? (
          <div>
            <h3 className="pb-2">Trending GIFs</h3>
            <div className="row text-center">
              {this.state.results.map((result) => {
                return (
                  <GIFCard
                    key={result.id}
                    imageSource={result.images.downsized_medium.url}
                  />
                );
              })}
            </div>
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

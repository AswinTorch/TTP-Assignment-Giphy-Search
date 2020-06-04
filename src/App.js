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
  search = (searchTerm) => {
    this.setState({ input: searchTerm });

    if (searchTerm.length !== 0) {
      const searchEndpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=9`;
      this.fetchData(searchEndpoint);
    } else {
      this.fetchData(trendingEndpoint);
    }
  };

  render() {
    return (
      <div className="container">
        {/* Header */}
        <div className="">
          <h1 className="pb-4 pt-4">GIPHY Search</h1>
        </div>
        {/* Search Section */}
        <SearchField search={this.search} />
        {/* GIFs Section */}
        <div className="mb-4">
          {this.state.input.length === 0 ? (
            <h3 className="pb-2">Trending GIFs</h3>
          ) : (
            <h3 className="pb-2">Your Search Results</h3>
          )}

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
      </div>
    );
  }
}

export default App;

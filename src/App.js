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
      limit: 9,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  // Helper function to fetch data through axios
  fetchData = (endpoint) => {
    console.log(endpoint);
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

    if (this.state.input.length !== 0) {
      let searchEndpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${this.state.limit}`;
      this.fetchData(searchEndpoint);
    } else {
      // Default search result limit is 9 if input string is empty
      this.setState({ limit: 9 });
    }
  };

  // Function to load more search results
  loadMore = () => {
    this.setState((state) => ({
      limit: state.limit + 9,
    }));
  };

  // Checks for state change and if the limit has changed then fetches more data
  componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit && this.state.input.length !== 0)
      this.search(this.state.input);

    // Loads trending data again after input becomes blank after search
    if (this.state.input.length === 0) this.fetchData(trendingEndpoint);
  }

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
            <h3 className="pb-2">
              Your Search Results (Max: {this.state.limit})
            </h3>
          )}
          {/* GIF Cards */}
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

          {/* Button to load more results */}
          <button className="btn btn-primary mt-4 mb-4" onClick={this.loadMore}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default App;

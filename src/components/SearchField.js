import React, { Component } from "react";
import axios from "axios";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }
  search = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.search}></input>
        <button onSubmit={this.submit}>Submit</button>
      </div>
    );
  }
}

export default SearchField;

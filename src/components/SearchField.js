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
      <div className="mb-4">
        <form action="" className="form-inline">
          <input
            type="text"
            className="form-control mr-4"
            placeholder="Type something here"
          />
          <button onSubmit={this.props.search} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchField;

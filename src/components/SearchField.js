import React, { Component } from "react";
import axios from "axios";

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.props.search(e.target.value);
  };

  render() {
    return (
      <div className="mb-4">
        <form action="" className="">
          <input
            type="text"
            className="form-control mr-4"
            placeholder="Type something here to find the GIF of your dreams"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchField;

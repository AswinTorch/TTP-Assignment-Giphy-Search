import React, { Component } from "react";

class GIFCard extends Component {
  render() {
    return (
      <div className=".col-4">
        <div className="card">
          <img
            src={this.props.imageSource}
            alt="gif"
            style={{ height: "300px" }}
          />
        </div>
      </div>
    );
  }
}

export default GIFCard;

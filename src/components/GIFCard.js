import React, { Component } from "react";

class GIFCard extends Component {
  render() {
    return (
      <div className=".col-md-4">
        <div
          className="img-thumbnail bg-light"
          style={{ width: 350, height: 350 }}
        >
          <img
            className="rounded"
            src={this.props.imageSource}
            alt="gif"
            style={{ height: 340, width: 340, objectFit: "fit" }}
          />
        </div>
      </div>
    );
  }
}

export default GIFCard;

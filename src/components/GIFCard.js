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
            className=" image-fluid rounded"
            src={this.props.imageSource}
            alt="gif"
            style={{ maxHeight: 340, maxWidth: 350 }}
          />
        </div>
      </div>
    );
  }
}

export default GIFCard;

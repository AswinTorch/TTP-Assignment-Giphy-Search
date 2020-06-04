import React, { Component } from "react";

class GIFCard extends Component {
  render() {
    return (
      <div className=".col-md-4">
        <div style={{ width: 350, height: 300 }}>
          <img
            className="img-thumbnail image-fluid"
            src={this.props.imageSource}
            alt="gif"
          />
        </div>
      </div>
    );
  }
}

export default GIFCard;

import React, { Component } from "react";

class GIFCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageSource} alt="" />
      </div>
    );
  }
}

export default GIFCard;

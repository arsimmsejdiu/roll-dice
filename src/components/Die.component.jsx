import React, { Component } from "react";

import "./Die.style.css";

class Die extends Component {
  render() {
    const { face, rolling } = this.props;
    return (
      <i class={`Die fas fa-dice-${face} ${rolling && "shaking"}`}></i>
    );
  }
}

export default Die;

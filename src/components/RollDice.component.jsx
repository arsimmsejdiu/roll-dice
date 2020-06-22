import React, { Component } from "react";

import Die from "./Die.component";
import "./RollDice.style.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die1: "one",
    die2: "one",
    rolling: false,
  };

  handleRoll = () => {
    //Pick two new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });
    //wait one second and set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    const { die1, die2, rolling } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling}/>
          <Die face={die2} rolling={rolling}/>
        </div>
        <button onClick={this.handleRoll} disabled={rolling}>
          {rolling ? "Rolling ..." : "Roll Dice!!"}
        </button>
      </div>
    );
  }
}

export default RollDice;

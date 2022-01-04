import React, { Component } from "react";
import { WinCalculator } from "./calculator.jsx";

const characters = [
  {
    name: "Charlie",
    job: "Janitor",
  },
  {
    name: "Mac",
    job: "Bouncer",
  },
  {
    name: "Dee",
    job: "Aspring actress",
  },
  {
    name: "Dennis",
    job: "Bartender",
  },
];

class NestedCom extends Component {
  render() {
    return (
      <>
        <WinCalculator />
      </>
    );
  }
}

export default NestedCom;

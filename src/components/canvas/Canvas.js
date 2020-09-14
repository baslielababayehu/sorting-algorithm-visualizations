import React, { Component } from "react";
import "./Canvas.css";
import { getBubbleSortAnimations } from "../algorithm/Sort.js";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "blueviolet";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortIsRunning: false,
      array: [],
    };
  }
  componentDidMount() {
    this.createNewArray();
  }

  createNewArray = (maxValue, minValue) => {
    maxValue = 566;
    minValue = 3;
    const array = [];
    let i = 0;
    while (i < 50) {
      array.push(Math.floor(Math.random() * (maxValue - minValue) + minValue));
      i = i + 1;
      // console.log(array);
    }
    this.setState({ array });
  };

  bubbleSort = () => {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      // let barOneIdx,
      //   barTwoIdx,
      //   barOneHeight,
      //   barTwoHeight = 0;
      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          // const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.width = `${barOneHeight}px`;
          barTwoStyle.width = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  render() {
    const { array } = this.state;
    return (
      <div>
        <button onClick={this.createNewArray}>Generate New Array</button>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ width: `${value}px` }}
          ></div>
        ))}
        <button onClick={this.bubbleSort}>bubbleSort</button>
      </div>
    );
  }
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) return true;
  }
}

export default Canvas;

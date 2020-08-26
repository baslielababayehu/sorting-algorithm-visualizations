import React, { Component } from "react";
import "./Canvas.css";
import * as bubbleSort from "../algorithm/Sort.js";

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  emptyArray = () => {
    this.setState({ array: [] });
  };

  sort() {
    const jsSortedArray = this.state.array.slice().sort();
    const bubbleSortedArray = bubbleSort(this.state.array);

    console.log(arraysAreEqual(jsSortedArray, bubbleSortedArray));
  }

  render() {
    const { array } = this.state;
    console.log(array);
    return (
      <div>
        <button onClick={this.createNewArray}>Generate New Array</button>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ width: `${value}px` }}>
            {" "}
            {value}
          </div>
        ))}
        <button onClick={this.sort}> bubbleSort</button>
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

import React, { Component } from "react";
import "./Canvas.css";
import {
  getBubbleSortAnimations,
  getQuickSortAnimations,
} from "../algorithm/Sort.js";
import ContinuousSlider, { SecondCustomizedSlider } from "../canvas/Slider";
import Menu from "../layout/Menu";

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
      animationSpeed: 5,
      numberOfArrayBars: 50,
    };
  }
  componentDidMount() {
    this.createNewArray();
  }
  // componentDidUpdate() {
  //   this.addElementsToArray();
  // }

  createNewArray = (maxValue, minValue) => {
    maxValue = 566;
    minValue = 3;
    const array = [];
    let i = 0;
    while (i < this.state.numberOfArrayBars) {
      array.push(Math.floor(Math.random() * (maxValue - minValue) + minValue));
      i = i + 1;
      // console.log(array);
    }
    this.setState({ array });
  };
  findSelectedAlgorithm = () => {
    let selectedValue = parseInt(
      document.getElementById("selectAlgorithm").value
    );
    console.log(selectedValue);
    switch (selectedValue) {
      case 0:
        alert("Select An Algorithm First!");
        break;
      case 1:
        this.quickSort();
        break;
      case 2:
        this.bubbleSort();
        break;
      case 3:
        this.insertionSort();
        break;
      case 4:
        this.heapSort();
        break;
      default:
        break;
    }
  };

  bubbleSort = () => {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, (i * 40) / this.state.animationSpeed);
      } else {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${barOneHeight / 10}vw`;
          barTwoStyle.height = `${barTwoHeight / 10}vw`;
        }, (i * 40) / this.state.animationSpeed);
      }
    }
  };

  quickSort = () => {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

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
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${barOneHeight / 10}vw`;
          barTwoStyle.height = `${barTwoHeight / 10}vw`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  updateValue = (e, data) => {
    this.setState({ animationSpeed: data });
    console.log(this.state.animationSpeed);
  };

  updateElements = (e, data) => {
    this.setState({ numberOfArrayBars: data });
    console.log(this.state.numberOfArrayBars);
  };

  addElementsToArray = () => {
    const array = this.state.array;
    array.push(Math.floor(Math.random() * (566 - 3) + 3));
  };

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="row m-0 p-0">
          <div
            className="col-12 "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <button
                className="btn btn-sm btn-dark mr-2 mb-2"
                onClick={this.createNewArray}
              >
                <i className="fa fa-repeat text-white"></i>
              </button>
            </div>
            <Menu />

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <button
                className="btn btn-sm btn-dark mr-2 mb-2"
                onClick={this.findSelectedAlgorithm}
              >
                Sort!
              </button>
            </div>
          </div>

          <div className="col-12 mt-2">
            Sort Speed{" "}
            <ContinuousSlider updateValue={this.updateValue.bind(this)} />
            Number of Elements
            <SecondCustomizedSlider
              updateElements={this.updateElements.bind(this)}
              numberOfArrayBars={this.state.numberOfArrayBars}
            />
          </div>
        </div>

        <div className="m-2 border p-2">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                margin: "1px",
                height: `${value / 10}vw`,
                width: `${20 / this.state.numberOfArrayBars}vw`,
                display: "inline-block",
              }}
            ></div>
          ))}
        </div>
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

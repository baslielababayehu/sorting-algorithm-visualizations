import React, { Component, Fragment } from "react";
import "./Canvas.css";
import {
  getBubbleSortAnimations,
  getQuickSortAnimations,
  getInsertionSortAnimations,
  getSelectionSortAnimations,
} from "../algorithm/Sort.js";

import Menu from "../layout/Menu";
import SpeedSlider, { ElementsSlider } from "./Slider";

// This is the main color of the array bars.
const PRIMARY_COLOR = "blueviolet";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortIsRunning: 0,
      noOfElementsIsChanged: 0,

      array: [],
      animationSpeed: 5,
      numberOfArrayBars: 50,
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
    while (i < this.state.numberOfArrayBars) {
      array.push(Math.floor(Math.random() * (maxValue - minValue) + minValue));
      i = i + 1;
      // console.log(array);
    }
    this.setState({ array });
    this.setState({ noOfElementsIsChanged: 0 });
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
        this.selectionSort();
        break;
      default:
        break;
    }
  };

  bubbleSort = async () => {
    await this.setState({ sortIsRunning: 1 });
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        await new Promise((resolve) => {
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            resolve();
          }, 1 / (20 * this.state.animationSpeed));
        });
      } else {
        await new Promise((resolve) => {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight / 10}vw`;
            barTwoStyle.height = `${barTwoHeight / 10}vw`;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      }
    }
    this.setState({ sortIsRunning: 0 });
  };
  quickSort = async () => {
    await this.setState({ sortIsRunning: 1 });
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        await new Promise((resolve) => {
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      } else {
        await new Promise((resolve) => {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight / 10}vw`;
            barTwoStyle.height = `${barTwoHeight / 10}vw`;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      }
    }
    this.setState({ sortIsRunning: 0 });
  };
  insertionSort = async () => {
    await this.setState({ sortIsRunning: 1 });
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        await new Promise((resolve) => {
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      } else {
        await new Promise((resolve) => {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight / 10}vw`;
            barTwoStyle.height = `${barTwoHeight / 10}vw`;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      }
    }
    this.setState({ sortIsRunning: 0 });
  };

  selectionSort = async () => {
    await this.setState({ sortIsRunning: 1 });
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];

      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        await new Promise((resolve) => {
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      } else {
        await new Promise((resolve) => {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight / 10}vw`;
            barTwoStyle.height = `${barTwoHeight / 10}vw`;
            resolve();
          }, 1 / (20 * Math.pow(this.state.animationSpeed, 1.9)));
        });
      }
    }
    this.setState({ sortIsRunning: 0 });
  };

  updateValue = async (e, data) => {
    await this.setState({ animationSpeed: data });
    console.log(this.state.animationSpeed);
  };

  updateElements = async (e, data) => {
    await this.setState({ numberOfArrayBars: data });
    await this.setState({ noOfElementsIsChanged: 1 });
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
            {this.state.sortIsRunning === 1 ? null : (
              <Fragment>
                {this.state.noOfElementsIsChanged === 1 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <button
                      className="btn btn-sm btn-danger mr-2 mb-2"
                      onClick={this.createNewArray}
                    >
                      <i className="fa fa-repeat text-white"></i>
                    </button>
                  </div>
                ) : (
                  <Fragment>
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
                  </Fragment>
                )}
              </Fragment>
            )}
          </div>
          {this.state.sortIsRunning === 1 ? (
            <div className="col-12 mt-2">
              Sort Speed <SpeedSlider disabled={true} />
              Number of Elements
              <ElementsSlider disabled={true} />
            </div>
          ) : (
            <div className="col-12 mt-2">
              Sort Speed{" "}
              <SpeedSlider updateValue={this.updateValue.bind(this)} />
              Number of Elements
              <ElementsSlider
                updateElements={this.updateElements.bind(this)}
                numberOfArrayBars={this.state.numberOfArrayBars}
              />
            </div>
          )}
        </div>

        <div className="m-2 border p-2">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                margin: "1px",
                height: `${value / 10}vw`,
                width: `${25 / Math.pow(this.state.numberOfArrayBars, 0.85)}vw`,
                display: "inline-block",
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Canvas;

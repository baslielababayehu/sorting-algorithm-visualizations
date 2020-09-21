import React from "react";
import "./App.css";
import Canvas from "./components/canvas/Canvas.js";
import Navbarcustom from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbarcustom
        icon="fa fa-sitemap"
        title="Algorithm Visualization"
        style={{ color: "white" }}
      />
      <div className="row m-0 p-0">
        <div className="col-12">
          <Canvas></Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;

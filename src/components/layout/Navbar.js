import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Navbarcustom = () => {
  return (
    <div className="bg-dark py-2 px-2 mb-3">
      <span>
        <a
          className="text-decoration-none bg-dark rounded-0 text-light"
          href="#"
        >
          <i class="fa fa-pencil"></i>
          &nbsp; Sort Algorithm Visualizer
        </a>
      </span>
    </div>
  );
};

export default Navbarcustom;

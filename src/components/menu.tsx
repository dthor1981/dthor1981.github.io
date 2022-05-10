import React from "react";
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Link to="/">Home</Link>
          </div>
          <div className="col-2">
            <Link to="/about">About</Link>
          </div>
          <div className="col-2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;

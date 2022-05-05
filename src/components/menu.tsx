import React from "react";
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
  

  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-12">
        <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  }
}

export default MainMenu;
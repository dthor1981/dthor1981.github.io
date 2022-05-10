// import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

class Header extends React.Component<{}, { show: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      show: false,
    };
  }

  titles = {
    logoText: "THOR",
    headerText: "ALWAYS LEARNING, ALWAYS GROWING, ALWAYS CODING",
  };

  // handleClose() {
  //     this.setState({ show: false });
  // };

  handleClose = () => {
    this.setState({ show: false });
  };
  // handleShow() {
  //     this.setState({ show: true });
  // }

  handleShow = () => {
    this.setState({ show: true });
  };

  openModal() {
    console.log("OPEN MODAL");
  }

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11">
              <h1 className="align-middle">
                {this.titles.logoText} | {this.titles.headerText}
              </h1>
            </div>
            <div className="col-1 fs-2">
              <Icon.MenuButtonWide
                className="mainMenuSVG mx-auto d-block"
                onClick={this.handleShow}
              />
            </div>
            {/* MODAL */}

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            {/* END MODAL */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import MainMenu from "../../components/menu";

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

  modalClose = () => {
    this.setState({ show: false });
  };

  modalShow = () => {
    this.setState({ show: true });
  };

  openModal() {
    console.log("OPEN MODAL");
  }

  // TODO: Send down prop to close 
  
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
                onClick={this.modalShow}
              />
            </div>
            {/* MODAL */}
            <Modal show={this.state.show} onHide={this.modalClose}>
              <Modal.Header closeButton>
                {/* <Modal.Title>Menu</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <MainMenu />
              </Modal.Body>
            </Modal>
            {/* END MODAL */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

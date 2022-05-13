import React from "react";
import { ListGroup } from "react-bootstrap";
import { MainMenuModel } from "../models/menu.models"
import { Link } from "react-router-dom";

class MainMenu extends React.Component<{}, { menu: MainMenuModel[] }> {

  constructor(props: object) {
    super(props)

    this.state = {
      menu: [
        { id: 0, label: 'HOME', path: '/' },
        { id: 1, label: 'ABOUT', path: '/about' },
        { id: 2, label: 'CONTACT', path: '/contact' }
      ]
    }
  }

  // TODO: Emit up close after click on link

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ListGroup as="ul">
              {
                this.state.menu.map((menuType) => {
                  return <ListGroup.Item as="li" key={menuType.id}>
                    <Link to={menuType.path}>
                      {menuType.label}
                    </Link>
                  </ListGroup.Item>
                })
              }
            </ListGroup>
          </div>

        </div>
      </div >
    );
  }
}

export default MainMenu;

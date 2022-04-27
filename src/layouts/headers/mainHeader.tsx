// import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";


class Header extends React.Component {
    titles = {
        logoText: 'THOR',
        headerText: 'ALWAYS LEARNING, ALWAYS GROWING, ALWAYS CODING'
    }

    render() {
        return <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="align-middle">{this.titles.logoText} | {this.titles.headerText}</h1>
                    </div>
                </div>
            </div>
        </header>
    }
}

export default Header;
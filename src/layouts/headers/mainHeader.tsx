import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";


class Header extends React.Component {
    displayDesktop = () => {
        return <Toolbar>Hi From Desktop Header</Toolbar>;
    };
    render() {
        return <header>
            <AppBar>{this.displayDesktop()}</AppBar>
        </header>
    }
}

export default Header;
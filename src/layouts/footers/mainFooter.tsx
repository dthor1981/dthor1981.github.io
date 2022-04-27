import React from "react";

class Footer extends React.Component {
    text = {
        logoText: 'THOR',
        footerCopyrightText: 'All Rights Reserved'
    }

    render() {
        return <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p className="align-middle">© {this.text.logoText} | {this.text.footerCopyrightText}</p>
                    </div>
                </div>
            </div>
        </footer >
    }
}

export default Footer;
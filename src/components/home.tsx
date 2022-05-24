import React from "react";
import image from "../assets/images/main_bkg_img.jpg"

class Home extends React.Component {
    render() {
        return <div>
            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col-12">
                        Home
                        <img src={image} alt="room background"></img>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Home;
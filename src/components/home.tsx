import React from "react";
import BarChart from '../d3/BarChart';
// import PieChart from "../d3/PieChart";
// import LineChart from "../d3/LineChart";
import data from '../assets/data/data.json'

class Home extends React.Component {

    render() {
        return <div>
            <div className="container-fluid home-container">
                <div className="row home-row">
                    <div className="col-4 d-flex svg-container" id="container">
                        <BarChart data={data.barData} />
                    </div>
                    {/* <div className="col-4 d-flex justify-content-center">
                        <PieChart data={data.pieData} />
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <LineChart data={data.lineData} />
                    </div> */}
                </div>
                <div className="row home-row">
                    <div className="col-4 d-flex svg-container" id="container">
                        <BarChart data={data.barData} />
                    </div>
                    {/* <div className="col-4 d-flex justify-content-center">
                        <PieChart data={data.pieData} />
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <LineChart data={data.lineData} />
                    </div> */}
                </div>
            </div>
        </div >
    }
}

export default Home;
import React from "react";
import BarChart from '../d3/BarChart';
import PieChart from "../d3/PieChart";
import LineChart from "../d3/LineChart";
import DonutChart from "../d3/DonutChart";
import AreaStackChart from "../d3/AreaStackChart"
import HorizontalBarChart from "../d3/HorizontalBarChart";
import data from '../assets/data/data.json'

class Home extends React.Component {

    render() {
        return <div>
            <div className="container-fluid home-container">
                <div className="row home-row border-bottom">
                    <div className="col-4 d-flex svg-container border-end">
                        <BarChart data={data.barData} />
                    </div>
                    <div className="col-4 d-flex svg-container border-end">
                        <PieChart data={data.pieData} />
                    </div>
                    <div className="col-4 d-flex svg-line-chart-container">
                        <LineChart data={data.lineData} />
                    </div>
                </div>
                <div className="row home-row">
                    <div className="col-4 d-flex svg-container border-end">
                        <HorizontalBarChart data={data.horizontalBarData} />
                    </div>
                    <div className="col-4 d-flex svg-container border-end">
                        <DonutChart data={data.donutData} />
                    </div>
                    <div className="col-4 d-flex svg-line-chart-container">
                        <AreaStackChart data={data.areaStackData} />
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Home;
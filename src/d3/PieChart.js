import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

let height = 500;
let width = 500;
function PieChart({ data }) {
  const ref = useD3((svg) => {
    console.log(data);
    // const svg = d3.select("svg"),
    //   width = svg.attr("width"),
    //   height = svg.attr("height"),
    const radius = Math.min(width, height) / 2;
    const g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal([
      "#4daf4a",
      "#377eb8",
      "#ff7f00",
      "#984ea3",
      "#e41a1c",
    ]);
    // Generate the pie
    const pie = d3.pie();

    // Generate the arcs
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    //Generate groups
    const arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    //Draw arc paths
    arcs
      .append("path")
      .attr("fill", function (d, i) {
        return color(i);
      })
      .attr("d", arc);
  });

  return (
    <>
      <svg 
      viewBox={`0 0 ${height} ${width}`}
       style={{
          height: "100%"
        }}
      ref={ref}></svg>
    </>
  );
}

export default PieChart;

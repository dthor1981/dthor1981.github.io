import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

let width = 100;
let height = 60;

function PieChart({ data }) {
  const ref = useD3((svg) => {
    console.log(data);
    // const svg = d3.select("svg"),
    //   width = svg.attr("width"),
    //   height = svg.attr("height"),

    svg
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 100 60")
    .classed("svg-content", true);

    const radius = Math.min(width, height) / 2.5;
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
      preserveAspectRatio = "xMinYMin meet"
      ref={ref}></svg>
    </>
  );
}

export default PieChart;

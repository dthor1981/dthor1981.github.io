import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

let width = 100;
let height = 100;
let margin = 10;

function DonutChart({ data }) {
  const ref = useD3((svg) => {
    console.log(data);

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;
    svg
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 200 120")
      .classed("svg-content", true);

    // set the color scale
    const color = d3
      .scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value((d) => d[1]);

    const data_ready = pie(Object.entries(data));

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("pieces")
      .data(data_ready)
      .join("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(55) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", (d) => color(d.data[0]))
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
      .attr("transform", `translate(100,60)`);
  });

  return (
    <>
      <svg
        viewBox={`0 0 ${height} ${width}`}
        preserveAspectRatio="xMinYMin meet"
        ref={ref}
      ></svg>
    </>
  );
}

export default DonutChart;

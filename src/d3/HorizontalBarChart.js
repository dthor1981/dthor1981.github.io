import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

let width = 200;
let height = 120;

function HorizontalBarChart({ data }) {
  const ref = useD3(
    (svg) => {
      // set the dimensions and margins of the graph
      const margin = { top: 10, right: 10, bottom: 20, left: 40 };

      width = 200 - margin.left - margin.right;
      height = 120 - margin.top - margin.bottom;

      svg
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 200 120")
        .classed("svg-content", true);

      // Add X axis
      const x = d3.scaleLinear().domain([0, 5000]).rangeRound([0, width]);
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Y axis
      const y = d3
        .scaleBand()
        .rangeRound([0, height])
        .domain(data.map((d) => d.Country))
        .padding(0.1);
      svg
        .append("g")
        .call(d3.axisLeft(y))
        .attr("transform", `translate(${margin.left},0)`);
      // // Add X axis
      // const x = d3.scaleLinear().domain([0, 6000]).rangeRound([40, width]);
      // svg
      //   .append("g")
      //   .attr("transform", `translate(0, ${height})`)
      //   .call(d3.axisBottom(x))
      //   .selectAll("text")
      //   .attr("transform", "translate(-10,0)rotate(-45)")
      //   .style("text-anchor", "end");

      // // Y axis
      // const y = d3
      //   .scaleBand()
      //   .rangeRound([0, height])
      //   .domain(data.map((d) => d.Country))
      //   .padding(0.1)
      //   .rangeRound([height - margin.bottom, margin.top]);
      // svg.append("g").attr("transform", "translate(40,0)").call(d3.axisLeft(y));

      //Bars
      svg
        .selectAll("myRect")
        .data(data)
        .join("rect")
        .attr("x", x(0))
        .attr("height", y.bandwidth())
        .attr("y", (d) => y(d.Country))
        .attr("width", (d) => x(d.Value))
        .attr("fill", "#69b3a2")
        .attr("transform", `translate(${margin.left},0)`);

      //Bars
      // svg
      //   .selectAll("myRect")
      //   .data(data)
      //   .join("rect")
      //   .attr("x", x(width))
      //   .attr("y", (d) => y(d.Country))
      //   .attr("width", (d) => x(d.Value))
      //   .attr("height", y.bandwidth())
      //   .attr("fill", "#69b3a2");
    },
    [data.length]
  );

  return (
    <>
      <svg
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        preserveAspectRatio="xMinYMin meet"
      ></svg>
    </>
  );
}

export default HorizontalBarChart;

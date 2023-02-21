import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 200 - margin.top - margin.bottom;

function AreaStackChart({ data }) {
  const ref = useD3((svg) => {
    console.log(ref);

    // set the dimensions and margins of the graph
    svg
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .classed("svg-content", true)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // group the data: one array for each value of the X axis.
    const sumStat = d3.group(data, (d) => d.year);

    // Stack the data: each group will be represented on top of each other
    const myGroups = ["Helen", "Amanda", "Ashley"]; // list of group names
    const myGroup = [1, 2, 3]; // list of group names
    const stackedData = d3
      .stack()
      .keys(myGroup)
      .value(function (d, key) {
        return d[1][key].n;
      })(sumStat);

    // Add X axis --> it is a date format
    const x = d3
      .scaleLinear()
      .domain(
        d3.extent(data, function (d) {
          return d.year;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return +d.n;
        }) * 1.2,
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // color palette
    const color = d3
      .scaleOrdinal()
      .domain(myGroups)
      .range([
        "#e41a1c",
        "#377eb8",
        "#4daf4a",
        "#984ea3",
        "#ff7f00",
        "#ffff33",
        "#a65628",
        "#f781bf",
        "#999999",
      ]);

    // Show the areas
    svg
      .selectAll("mylayers")
      .data(stackedData)
      .join("path")
      .style("fill", function (d) {
        const name = myGroups[d.key - 1];
        return color(name);
      })
      .attr(
        "d",
        d3
          .area()
          .x(function (d, i) {
            return x(d.data[0]);
          })
          .y0(function (d) {
            return y(d[0]);
          })
          .y1(function (d) {
            return y(d[1]);
          })
      );
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

export default AreaStackChart;

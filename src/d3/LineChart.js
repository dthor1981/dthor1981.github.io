import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 380 - margin.top - margin.bottom;

function LineChart({ data }) {
  const ref = useD3((svg) => {
    console.log(ref);
    const mapData = data.map((d) => {
      return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value };
    });
    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    svg
      //   .attr("width", width + margin.left + margin.right)
      //   .attr("height", height + margin.top + margin.bottom)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 460 380")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add X axis --> it is a date format
    const x = d3
      .scaleTime()
      .domain(
        d3.extent(mapData, function (d) {
          return d.date;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(mapData, function (d) {
          return +d.value;
        }),
      ])
      .range([height, 10]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(mapData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            console.log(d.date);
            return x(d.date);
          })
          .y(function (d) {
            console.log(d.value);
            return y(d.value);
          })
      );
    // });
  });

  return (
    <>
      <svg
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: "100%",
        }}
        ref={ref}
      ></svg>
    </>
  );
}

export default LineChart;

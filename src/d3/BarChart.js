import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

const width = 200;
const height = 120;

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const margin = { top: 10, right: 10, bottom: 30, left: 40 };

      svg
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 200 120")
        .classed("svg-content", true);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(
            d3
              .axisBottom(x)
              .tickValues(
                d3
                  .ticks(...d3.extent(x.domain()), width / 40)
                  .filter((v) => x(v) !== undefined)
              )
              .tickSizeOuter(0)
          )
          .style(`font-family`, "Karla")
          .style("color", "#f8f9fa");

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("font-size", 10)
          .style("color", "#f8f9fa")
          .style("font-family", "Karla")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      // Grid lines
      svg
        .append("g")
        .attr("class", "grid")
        .style("color", "#9FAAAE")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(y1).tickSize(-width, 0, 0).tickFormat(""));

      const plotArea = svg.append("g").attr("class", "plot-area");

      const barGroup = plotArea
        .selectAll("bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("fill", (d) => {
          switch (true) {
            case d.sales >= 5000: {
              return `#ff1d58`;
            }
            case d.sales >= 4000: {
              return `#fff685`;
            }
            case d.sales >= 3000: {
              return `#5cbdb9`;
            }
            default: {
              return `steelblue`;
            }
          }
        })
        .style("stroke", `black`)
        .on("mouseenter", function (actual, i) {
          d3.select(this).attr("fill", "steelblue");
        })
        .on("mouseleave", function (actual, i) {
          d3.select(this).attr("fill", (d) => {
            switch (true) {
              case d.sales >= 5000: {
                return `#ff1d58`;
              }
              case d.sales >= 4000: {
                return `#fff685`;
              }
              case d.sales >= 3000: {
                return `#5cbdb9`;
              }
              default: {
                return `steelblue`;
              }
            }
          });
        })
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales))
        .append("title")
        .text((d) => `Sales were ${d.sales} in ${d.year}`);
    },
    [data.length]
  );

  return (
    <>
      <svg
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        preserveAspectRatio="xMinYMin meet"
      >
        {/* <g className="plot-area" /> */}
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  );
}

export default BarChart;

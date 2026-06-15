import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

class IssueChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [IssueData["open"], IssueData["closed"]],
          backgroundColor: [
            "rgba(0, 240, 255, 0.4)" /* Open - Cyber Cyan */,
            "rgba(245, 95, 68, 0.4)" /* Closed - Red/Orange */,
          ],
          hoverBackgroundColor: [
            "rgba(0, 240, 255, 0.8)",
            "rgba(245, 95, 68, 0.8)",
          ],
          borderColor: ["#00f0ff", "#f55f44"],
          borderWidth: 2,
        },
      ],
    };

    return (
      <div className="issue-chart">
        <h2 className="issue-chart-header">Issue Distribution</h2>

        <Doughnut
          data={data}
          options={{
            margin: "0",
            padding: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default IssueChart;

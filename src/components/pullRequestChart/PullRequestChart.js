import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: [
            "rgba(0, 240, 255, 0.4)" /* Open - Cyber Cyan */,
            "rgba(255, 176, 0, 0.4)" /* Merged - Cyber Amber */,
            "rgba(245, 95, 68, 0.4)" /* Closed - Red/Orange */,
          ],
          hoverBackgroundColor: [
            "rgba(0, 240, 255, 0.8)",
            "rgba(255, 176, 0, 0.8)",
            "rgba(245, 95, 68, 0.8)",
          ],
          borderColor: ["#00f0ff", "#ffb000", "#f55f44"],
          borderWidth: 2,
        },
      ],
    };

    return (
      <div className="pr-chart">
        <h2 className="pr-chart-header">Pull Request Distribution</h2>

        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
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

export default PullRequestChart;

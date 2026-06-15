import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import TopLanguages from "../../components/topLanguages/TopLanguages.js";
import ContributionsHeatmap from "../../components/contributionsHeatmap/ContributionsHeatmap.js";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    // Always use dark/tokyonight card theme since we're in cyber dark mode
    const cardTheme = "tokyonight";

    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          <h1
            className="os-charts-header"
            style={{ color: theme.imageHighlight }}
          >
            Contributions &amp; Git Metrics
          </h1>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <TopLanguages theme={theme} />
        </div>
        <div className="os-heatmap-div">
          <ContributionsHeatmap theme={theme} />
        </div>
        <div className="github-cards-div">
          <h2
            className="github-cards-header"
            style={{ color: theme.imageHighlight }}
          >
            Live GitHub Achievements
          </h2>
          <div className="github-cards-body">
            <div className="github-card-item">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=UmerMujahid&theme=${cardTheme}&hide_border=false`}
                alt="Umer Mujahid's GitHub Streak"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;

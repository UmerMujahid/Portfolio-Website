import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import TopLanguages from "../../components/topLanguages/TopLanguages.js";
import ContributionsHeatmap from "../../components/contributionsHeatmap/ContributionsHeatmap.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    const isDark =
      theme.body === "#1D1D1D" ||
      theme.body === "#000000" ||
      theme.body === "#020617" ||
      theme.body === "#0f172a" ||
      theme.body === "#263238";
    const cardTheme = isDark ? "tokyonight" : "default";

    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions & Git Metrics
            </h1>
          </Fade>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <TopLanguages theme={theme} />
        </div>
        <div className="os-heatmap-div">
          <ContributionsHeatmap theme={theme} />
        </div>
        <div className="github-cards-div">
          <Fade bottom duration={2000} distance="20px">
            <h2 className="github-cards-header" style={{ color: theme.text }}>
              Live GitHub Achievements
            </h2>
          </Fade>
          <div className="github-cards-body">
            <Fade bottom duration={2000} distance="20px">
              <div className="github-card-item">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=UmerMujahid&theme=${cardTheme}&hide_border=false`}
                  alt="Umer Mujahid's GitHub Streak"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;

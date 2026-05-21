import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import TopButton from "../../components/topButton/TopButton";
import ArrowNavigation from "../../components/arrowNavigation/ArrowNavigation";
import "./Opensource.css";

// Import our custom repository list and metrics components
import RepositoryList from "../../components/repositoryList/RepositoryList";
import TopLanguages from "../../components/topLanguages/TopLanguages";
import { Fade } from "react-reveal";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />
        <Organizations theme={theme} />

        <div className="opensource-dashboard-header">
          <Fade bottom duration={2000} distance="20px">
            <h1
              className="opensource-dashboard-title"
              style={{ color: theme.text }}
            >
              Contributions & Git Metrics
            </h1>
          </Fade>
        </div>

        <div className="opensource-grid-container">
          <div className="opensource-left-col">
            <RepositoryList theme={theme} />
          </div>
          <div className="opensource-right-col">
            <TopLanguages theme={theme} />
          </div>
        </div>

        <PullRequests theme={theme} />
        <ArrowNavigation
          theme={theme}
          nextPage="/contact"
          nextText="Contact Me"
        />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;

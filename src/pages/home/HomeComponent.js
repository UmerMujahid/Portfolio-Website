import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import ArrowNavigation from "../../components/arrowNavigation/ArrowNavigation";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} isHome={true} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <ArrowNavigation
          theme={this.props.theme}
          nextPage="/education"
          nextText="Education"
        />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;

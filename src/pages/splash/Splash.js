import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{
          backgroundColor: props.theme.splashBg,
          flexDirection: "column",
        }}
      >
        <div className="splash-container">
          <LoaderLogo id="logo" theme={props.theme} />
          <div className="splash-quote-div">
            <h1
              className="splash-quote-title"
              style={{ color: props.theme.text }}
            >
              Engineering Beyond Boundaries
            </h1>
            <p
              className="splash-quote-text"
              style={{ color: props.theme.secondaryText }}
            >
              Crafting Intelligent Solutions, Shaping the Future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;

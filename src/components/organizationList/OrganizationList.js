import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

const getOrgLogo = (login) => {
  const name = login.toLowerCase();
  try {
    if (name.includes("fast")) {
      return require("../../assets/images/fast_nuces.png");
    }
    if (name.includes("google")) {
      return require("../../assets/images/google_logo.png");
    }
    if (name.includes("github")) {
      return require("../../assets/images/github_logo.png");
    }
    if (name.includes("microsoft")) {
      return require("../../assets/images/microsoft_logo.png");
    }
    if (name.includes("coursera")) {
      return require("../../assets/images/coursera_logo.png");
    }
    if (name.includes("kaggle")) {
      return "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg";
    }
  } catch (e) {
    console.error("Error loading local logo:", e);
  }
  return null;
};

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            const logoSrc = getOrgLogo(logo["login"]) || logo["avatarUrl"];
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organizations-inline" name={logo["login"]}>
                  <Fade bottom duration={2000} distance="40px">
                    <img
                      className="organizations-img"
                      src={logoSrc}
                      alt={logo["login"]}
                    />
                  </Fade>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;

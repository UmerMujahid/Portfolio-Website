import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const getOrgLogo = (login) => {
  const name = login.toLowerCase();
  try {
    if (name.includes("fast")) {
      return {
        src: require("../../assets/images/fast_nuces.png"),
        dark: false,
      };
    }
    if (name.includes("google")) {
      return {
        src: require("../../assets/images/google_logo.png"),
        dark: false,
      };
    }
    if (name.includes("github")) {
      return {
        src: require("../../assets/images/github_logo.png"),
        dark: true,
      };
    }
    if (name.includes("microsoft")) {
      return {
        src: require("../../assets/images/microsoft_logo.png"),
        dark: false,
      };
    }
    if (name.includes("coursera")) {
      return {
        src: require("../../assets/images/coursera_logo.png"),
        dark: false,
      };
    }
    if (name.includes("kaggle")) {
      return {
        src: "https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg",
        dark: false,
      };
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
            const logoData = getOrgLogo(logo["login"]);
            const logoSrc = logoData ? logoData.src : logo["avatarUrl"];
            const isDark = logoData ? logoData.dark : false;
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
                  <img
                    className={`organizations-img${
                      isDark ? " org-logo-dark" : ""
                    }`}
                    src={logoSrc}
                    alt={logo["login"]}
                  />
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

import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const handleSmoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu if open
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      menuBtn.checked = false;
    }
  }
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const isOnePage = this.props.isOnePage;
    const link = "/";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div
          style={{
            position: this.props.isHome ? "static" : "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: theme.body,
          }}
        >
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                {isOnePage ? (
                  <a
                    href="#greeting"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("greeting");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </a>
                ) : (
                  <NavLink
                    to="/home"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </NavLink>
                )}
              </li>
              <li>
                {isOnePage ? (
                  <a
                    href="#education"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("education");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Education
                  </a>
                ) : (
                  <NavLink
                    to="/education"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Education
                  </NavLink>
                )}
              </li>
              <li>
                {isOnePage ? (
                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("experience");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Experience
                  </a>
                ) : (
                  <NavLink
                    to="/experience"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Experience
                  </NavLink>
                )}
              </li>
              <li>
                {isOnePage ? (
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("projects");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Projects
                  </a>
                ) : (
                  <NavLink
                    to="/projects"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Projects
                  </NavLink>
                )}
              </li>
              <li>
                {isOnePage ? (
                  <a
                    href="#opensource"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("opensource");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Open Source
                  </a>
                ) : (
                  <NavLink
                    to="/opensource"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Open Source
                  </NavLink>
                )}
              </li>
              <li>
                {isOnePage ? (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll("contact");
                    }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact Me
                  </a>
                ) : (
                  <NavLink
                    to="/contact"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact Me
                  </NavLink>
                )}
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;

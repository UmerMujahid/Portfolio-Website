import React from "react";
import "./Footer.css";

import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <div className="footer-content">
        <p
          className="footer-text-left"
          style={{ color: props.theme.secondaryText }}
        >
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
        <p
          className="footer-text-right"
          style={{ color: props.theme.secondaryText }}
        >
          {greeting.title}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./ArrowNavigation.css";

export default function ArrowNavigation({ theme, nextPage, nextText }) {
  return (
    <div className="arrow-nav-container">
      <Link
        to={nextPage}
        className="arrow-nav-link"
        style={{ "--text-color": theme.text }}
      >
        <div
          className="arrow-nav-content"
          style={{ backgroundColor: theme.highlight }}
        >
          <span className="arrow-nav-label" style={{ color: theme.text }}>
            Continue to {nextText}
          </span>
          <div className="arrow-nav-icon-wrapper" style={{ color: theme.text }}>
            <svg
              className="arrow-nav-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

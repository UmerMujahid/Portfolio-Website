import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio.js";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="100%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          className="mySignature"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          stroke={theme.body}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            fontFamily: "'Agustina Regular', 'Dancing Script', cursive",
            fontSize: "50px",
          }}
        >
          {greeting.logo_name}
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .mySignature {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  -webkit-animation: dash 5s linear forwards 0.5s;
                  -o-animation: dash 5s linear forwards 0.5s;
                  -moz-animation: dash 5s linear forwards 0.5s;
                  animation: dash 5s linear forwards 0.5s;
                }
                @-webkit-keyframes dash {
                  from {
                    stroke-dashoffset: 1000;
                  }
                  to {
                    stroke-dashoffset: 0;
                  }
                }
                @keyframes dash {
                  from {
                    stroke-dashoffset: 1000;
                  }
                  to {
                    stroke-dashoffset: 0;
                  }
                }
              `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;

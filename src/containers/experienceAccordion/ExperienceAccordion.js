import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <div>
          {this.props.sections.map((section) => {
            return (
              <div
                className="accord-panel"
                key={section["title"]}
                style={{ marginBottom: "20px" }}
              >
                <div
                  style={{
                    backgroundColor: theme.body,
                    border: `1px solid ${theme.headerColor}`,
                    borderRadius: "5px",
                    marginBottom: "3px",
                    fontFamily: "var(--font-mono)",
                    color: theme.text,
                    padding: "16px 24px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {section["title"]}
                </div>
                <div
                  style={{
                    backgroundColor: theme.body,
                    paddingTop: "4px",
                    paddingBottom: "16px",
                  }}
                >
                  {section["experiences"].map((experience, index) => {
                    return (
                      <ExperienceCard
                        key={index}
                        index={index}
                        totalCards={section["experiences"].length}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;

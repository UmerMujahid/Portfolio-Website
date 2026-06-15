import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 0 : 40 }}
      >
        {/* Logo */}
        <div className="experience-card-logo-div">
          <img
            className={`experience-card-logo ${
              experience["logo_path"] === "ijt.png" ||
              experience["logo_path"] === "ecom.png" ||
              experience["logo_path"] === "mern1.png"
                ? "contain"
                : ""
            }`}
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>

        {/* Timeline stepper */}
        <div className="experience-card-stepper">
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#ffb000",
              borderRadius: 50,
              zIndex: 100,
              boxShadow: "0 0 10px rgba(255,176,0,0.5)",
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 1,
                backgroundColor: "rgba(255,176,0,0.25)",
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>

        {/* Card */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="arrow-left"
            style={{ borderRight: `10px solid rgba(255,176,0,0.3)` }}
          ></div>
          <div className="experience-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  className="experience-card-title"
                  style={{ color: theme.imageHighlight }}
                >
                  {experience["title"]}
                </h3>
                <p
                  className="experience-card-company"
                  style={{ color: theme.text }}
                >
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div>
                <div className="experience-card-heading-right">
                  <p
                    className="experience-card-duration"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["duration"]}
                  </p>
                  <p
                    className="experience-card-location"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["location"]}
                  </p>
                </div>
              </div>
            </div>

            {/* Description — now properly styled with theme color */}
            <div
              className="experience-card-description"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;

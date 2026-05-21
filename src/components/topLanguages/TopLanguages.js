import React from "react";
import "./TopLanguages.css";
import ProjectsData from "../../shared/opensource/projects.json";

export default function TopLanguages(props) {
  const theme = props.theme;

  // Dynamically calculate language frequencies
  const languageCounts = {};
  let totalCount = 0;

  ProjectsData.data.forEach((repo) => {
    if (repo.languages && Array.isArray(repo.languages)) {
      repo.languages.forEach((lang) => {
        languageCounts[lang.name] = (languageCounts[lang.name] || 0) + 1;
        totalCount++;
      });
    }
  });

  // Convert to array, calculate percentage, and sort descending
  const languageList = Object.keys(languageCounts)
    .map((name) => {
      const count = languageCounts[name];
      const percentage = Math.round((count / totalCount) * 100);

      // Assign sleek matching colors for languages
      let color = "#3b82f6"; // Default blue
      if (name === "Python") color = "#3776AB";
      else if (name === "JavaScript") color = "#F7DF1E";
      else if (name === "HTML") color = "#E34F26";
      else if (name === "CSS") color = "#1572B6";
      else if (name === "Jupyter Notebook") color = "#DA5B0B";

      return { name, percentage, color };
    })
    .sort((a, b) => b.percentage - a.percentage);

  const isBlueTheme = theme.body === "#EDF9FE";
  const cardBg = isBlueTheme ? "#E8F5FD" : theme.compImgHighlight;
  const cardBorder = isBlueTheme ? "#A6E1FA" : theme.imageHighlight;

  return (
    <div
      className="top-languages-card"
      style={{
        backgroundColor: cardBg,
        borderColor: cardBorder,
      }}
    >
      <h2 className="languages-card-title" style={{ color: theme.text }}>
        Top Languages Used
      </h2>
      <div className="languages-bar-container">
        {languageList.map((lang, idx) => (
          <div key={idx} className="language-row">
            <div className="language-info">
              <span className="language-name" style={{ color: theme.text }}>
                {lang.name}
              </span>
              <span
                className="language-percentage"
                style={{ color: theme.secondaryText }}
              >
                {lang.percentage}%
              </span>
            </div>
            <div
              className="progress-bg"
              style={{ backgroundColor: theme.jacketColor + "44" }}
            >
              <div
                className="progress-fill"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                  boxShadow: `0 0 10px ${lang.color}88`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

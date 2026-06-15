import React from "react";
import "./RepositoryList.css";
import RepositoriesData from "../../shared/opensource/repositories.json";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getLanguageColor = (name) => {
  if (name === "Python") return "#3776AB";
  if (name === "JavaScript") return "#F7DF1E";
  if (name === "HTML") return "#E34F26";
  if (name === "CSS") return "#1572B6";
  if (name === "Jupyter Notebook") return "#DA5B0B";
  if (name === "TypeScript") return "#3178C6";
  if (name === "C++") return "#F34B7D";
  if (name === "C") return "#555555";
  return "#3b82f6";
};

export default function RepositoryList(props) {
  const theme = props.theme;
  const repos = RepositoriesData.data || [];

  const isBlueTheme = theme.body === "#EDF9FE";
  const cardBg = isBlueTheme ? "#E8F5FD" : theme.compImgHighlight;
  const cardBorder = isBlueTheme ? "#A6E1FA" : theme.imageHighlight;

  return (
    <div
      className="repo-list-container"
      style={{
        backgroundColor: cardBg || "rgba(0, 0, 0, 0.05)",
        borderColor: cardBorder || "#3b82f6",
      }}
    >
      <div className="repo-list-header">
        <h2 className="repo-list-title" style={{ color: theme.text }}>
          GitHub Repositories
        </h2>
        <span className="repo-count" style={{ color: theme.secondaryText }}>
          {repos.length} total
        </span>
      </div>
      <div className="repo-scroll-div">
        {repos.map((repo) => (
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card-link"
          >
            <div
              className="repo-card"
              style={{
                backgroundColor: theme.body,
                borderColor: theme.imageHighlight || "#e2e8f0",
              }}
            >
              <div className="repo-card-top">
                <div className="repo-name-div">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    fill={theme.text}
                    className="repo-svg"
                  >
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"></path>
                    <path d="M5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                  </svg>
                  <h3 className="repo-name" style={{ color: theme.text }}>
                    {repo.name}
                  </h3>
                </div>
                <span
                  className="repo-date"
                  style={{ color: theme.secondaryText }}
                >
                  {formatDate(repo.createdAt)}
                </span>
              </div>
              {repo.description && (
                <p
                  className="repo-description"
                  style={{ color: theme.secondaryText }}
                >
                  {repo.description}
                </p>
              )}
              <div className="repo-footer">
                <div className="repo-languages">
                  {repo.languages &&
                    repo.languages.nodes &&
                    repo.languages.nodes.slice(0, 3).map((lang) => (
                      <span
                        key={lang.name}
                        className="repo-lang-pill"
                        style={{
                          border: `1px solid ${getLanguageColor(lang.name)}`,
                          color: theme.text,
                        }}
                      >
                        <span
                          className="lang-dot"
                          style={{
                            backgroundColor: getLanguageColor(lang.name),
                          }}
                        />
                        {lang.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

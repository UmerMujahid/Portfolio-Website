import React, { useState } from "react";
import "./ContributionsHeatmap.css";
import ContributionsData from "../../shared/opensource/contributions.json";

export default function ContributionsHeatmap(props) {
  const theme = props.theme;
  const [hoveredCell, setHoveredCell] = useState(null);

  const weeks = ContributionsData.weeks || [];
  const totalContributions = ContributionsData.totalContributions || 0;
  const cells = [];

  weeks.forEach((week) => {
    if (week.contributionDays && Array.isArray(week.contributionDays)) {
      week.contributionDays.forEach((day) => {
        let level = 0;
        if (day.contributionLevel === "FIRST_QUARTILE") level = 1;
        else if (day.contributionLevel === "SECOND_QUARTILE") level = 2;
        else if (day.contributionLevel === "THIRD_QUARTILE") level = 3;
        else if (day.contributionLevel === "FOURTH_QUARTILE") level = 4;
        else if (day.contributionCount > 0) {
          if (day.contributionCount <= 2) level = 1;
          else if (day.contributionCount <= 5) level = 2;
          else if (day.contributionCount <= 8) level = 3;
          else level = 4;
        }

        const cellDate = new Date(day.date);
        cells.push({
          date: cellDate,
          count: day.contributionCount,
          level: level,
          dateString: cellDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        });
      });
    }
  });

  // Split into columns (usually 53)
  const columns = [];
  const daysPerWeek = 7;
  for (let c = 0; c < Math.ceil(cells.length / daysPerWeek); c++) {
    columns.push(cells.slice(c * daysPerWeek, (c + 1) * daysPerWeek));
  }

  // Get month labels with their column offset
  const monthLabels = [];
  let lastMonth = "";
  columns.forEach((col, colIdx) => {
    if (col && col[0]) {
      const monthName = col[0].date.toLocaleString("en-US", { month: "short" });
      if (monthName !== lastMonth) {
        monthLabels.push({ name: monthName, index: colIdx });
        lastMonth = monthName;
      }
    }
  });

  // Get color for contribution levels based on active theme
  const getCellColor = (level) => {
    const isDark =
      theme.body === "#1D1D1D" ||
      theme.body === "#000000" ||
      theme.body === "#020617" ||
      theme.body === "#0f172a";

    // Using standard vibrant emerald/forest greens for contribution matrix
    if (level === 0) return isDark ? "#161b22" : "#ebedf0";
    if (level === 1) return "#0e4429";
    if (level === 2) return "#006d32";
    if (level === 3) return "#26a641";
    return "#39d353";
  };

  return (
    <div
      className="heatmap-card"
      style={{
        backgroundColor: theme.compImgHighlight,
        borderColor: theme.imageHighlight,
      }}
    >
      <h2 className="heatmap-card-title" style={{ color: theme.text }}>
        GitHub Contribution Activity
      </h2>
      <p className="heatmap-subtitle" style={{ color: theme.secondaryText }}>
        {totalContributions} contributions in the past year, showcasing
        continuous learning and product engineering.
      </p>

      <div className="heatmap-wrapper">
        <div
          className="heatmap-labels-y"
          style={{ color: theme.secondaryText }}
        >
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>

        <div className="heatmap-grid-container">
          <div
            className="heatmap-months"
            style={{ color: theme.secondaryText }}
          >
            {monthLabels.map((lbl, idx) => (
              <span
                key={idx}
                style={{ position: "absolute", left: `${lbl.index * 15}px` }}
              >
                {lbl.name}
              </span>
            ))}
          </div>

          <svg width="800" height="110" className="heatmap-svg">
            <g>
              {columns.map((col, colIdx) => (
                <g key={colIdx} transform={`translate(${colIdx * 15}, 0)`}>
                  {col.map((day, rowIdx) => (
                    <rect
                      key={rowIdx}
                      width="12"
                      height="12"
                      y={rowIdx * 15}
                      rx="2"
                      ry="2"
                      fill={getCellColor(day.level)}
                      className="heatmap-rect"
                      onMouseEnter={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setHoveredCell({
                          x: rect.left + window.scrollX - 50,
                          y: rect.top + window.scrollY - 40,
                          day,
                        });
                      }}
                      onMouseLeave={() => setHoveredCell(null)}
                    />
                  ))}
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      <div className="heatmap-legend">
        <span className="legend-label" style={{ color: theme.secondaryText }}>
          Less
        </span>
        <div className="legend-blocks">
          <div
            className="legend-rect"
            style={{ backgroundColor: getCellColor(0) }}
          ></div>
          <div
            className="legend-rect"
            style={{ backgroundColor: getCellColor(1) }}
          ></div>
          <div
            className="legend-rect"
            style={{ backgroundColor: getCellColor(2) }}
          ></div>
          <div
            className="legend-rect"
            style={{ backgroundColor: getCellColor(3) }}
          ></div>
          <div
            className="legend-rect"
            style={{ backgroundColor: getCellColor(4) }}
          ></div>
        </div>
        <span className="legend-label" style={{ color: theme.secondaryText }}>
          More
        </span>
      </div>

      {hoveredCell && (
        <div
          className="heatmap-tooltip"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y}px`,
            backgroundColor: "#020617",
            borderColor: theme.imageHighlight,
            color: "#f8fafc",
          }}
        >
          <strong>
            {hoveredCell.day.count === 0 ? "No" : hoveredCell.day.count}{" "}
            contributions
          </strong>{" "}
          on {hoveredCell.day.dateString}
        </div>
      )}
    </div>
  );
}

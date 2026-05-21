import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DeveloperWorkspace.css";

export default function DeveloperWorkspace(props) {
  const theme = props.theme;
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputLogs, setOutputLogs] = useState([]);

  const runProfile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setOutputLogs([]);

    const messages = [
      "> npx portfolio run-profile",
      "🔍 Resolving developer skills & experiences...",
      "⚙️ Compiling BioBERT NLP & MERN configurations...",
      "✨ Hydrated AI/ML & Web Development repositories.",
      "🚀 Developer: Umer Mujahid is fully compiled! ⚡",
    ];

    messages.forEach((msg, idx) => {
      setTimeout(() => {
        setOutputLogs((prev) => [...prev, msg]);
        if (idx === messages.length - 1) {
          setIsCompiling(false);
        }
      }, (idx + 1) * 800);
    });
  };

  return (
    <div
      className="developer-workspace"
      style={{ backgroundColor: "#0b0f19", borderColor: theme.imageHighlight }}
    >
      {/* Top Window Bar */}
      <div className="workspace-header" style={{ backgroundColor: "#151b2c" }}>
        <div className="window-controls">
          <span className="control-dot red"></span>
          <span className="control-dot yellow"></span>
          <span className="control-dot green"></span>
        </div>
        <div className="window-title" style={{ color: theme.secondaryText }}>
          portfolio.tsx
        </div>
      </div>

      {/* Editor Body */}
      <div className="workspace-body">
        <div className="line-numbers" style={{ color: theme.jacketColor }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-container">
          <div className="code-line comment">
            {"// Welcome to my workspace"}
          </div>
          <div className="code-line">
            <span className="keyword">import</span>{" "}
            <span className="brace">{"{"}</span>{" "}
            <span className="variable">Developer</span>{" "}
            <span className="brace">{"}"}</span>{" "}
            <span className="keyword">from</span>{" "}
            <span className="string">'./universe'</span>;
          </div>
          <div className="code-line">&nbsp;</div>
          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="function">Portfolio</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="brace">()</span>{" "}
            <span className="operator">=&gt;</span>{" "}
            <span className="brace">{"{"}</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="keyword">return</span>{" "}
            <span className="brace">(</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;</span>
            <span className="component">Developer</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="attr">name</span>
            <span className="operator">=</span>
            <span className="string">"Umer Mujahid"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="attr">role</span>
            <span className="operator">=</span>
            <span className="string">"Full Stack Engineer"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="attr">passion</span>
            <span className="operator">=</span>
            <span className="string">"Engineering Beyond Boundaries"</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">/&gt;</span>
          </div>
          <div className="code-line">
            &nbsp;&nbsp;<span className="brace">)</span>;
          </div>
          <div className="code-line">
            <span className="brace">{"}"}</span>;
          </div>
        </div>
      </div>

      {/* Terminal Output Logs */}
      {outputLogs.length > 0 && (
        <div
          className="workspace-terminal"
          style={{ backgroundColor: "#020617" }}
        >
          {outputLogs.map((log, idx) => (
            <div
              key={idx}
              className={`terminal-log ${
                idx === outputLogs.length - 1 && !isCompiling ? "complete" : ""
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="workspace-actions" style={{ backgroundColor: "#151b2c" }}>
        <button
          onClick={runProfile}
          disabled={isCompiling}
          className={`workspace-btn run ${isCompiling ? "loading" : ""}`}
          style={{ borderColor: theme.imageHighlight }}
        >
          <span className="btn-icon">▶</span>
          <span>{isCompiling ? "Compiling..." : "Run Profile"}</span>
        </button>
        <Link
          to="/projects"
          className="workspace-btn projects"
          style={{ borderColor: theme.jacketColor }}
        >
          <span className="btn-icon" role="img" aria-label="projects">
            📂
          </span>
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
}

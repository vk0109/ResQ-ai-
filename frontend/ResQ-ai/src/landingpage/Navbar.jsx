import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="navbar-wrap">
      <nav className="glass-navbar">

        {/* Animated glass reflection */}
        <div className="navbar-reflection" />

        {/* Top edge highlight */}
        <div className="navbar-highlight" />

        {/* Brand */}
        <button className="brand" type="button">
          <span className="brand-icon">
            <span className="brand-diamond" />
            <span className="brand-dot" />
          </span>

          <span className="brand-name">
            ResQ<span>-AI</span>
          </span>
        </button>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            className={`theme-toggle ${darkMode ? "is-dark" : ""}`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <span className="theme-track">
              <span className="theme-icon sun-icon">
                <Sun size={13} strokeWidth={2.2} />
              </span>

              <span className="theme-icon moon-icon">
                <Moon size={13} strokeWidth={2.2} />
              </span>

              <span className="theme-knob">
                {darkMode ? (
                  <Moon size={14} strokeWidth={2.2} />
                ) : (
                  <Sun size={14} strokeWidth={2.2} />
                )}
              </span>
            </span>
          </button>

          {/* Get Started */}
          <button className="get-started" type="button">
            <span className="button-shine" />
            <span className="button-glass" />

            <span className="button-text">
              Get Started
            </span>

            <span className="button-arrow">
              →
            </span>
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
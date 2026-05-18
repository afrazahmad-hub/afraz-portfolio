"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  function toggleTheme() {
    const nextIsLight = !isLight;

    document.body.classList.toggle("light", nextIsLight);
    setIsLight(nextIsLight);
  }

  return (
    <button className="theme-btn" onClick={toggleTheme} type="button">
      {isLight ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}

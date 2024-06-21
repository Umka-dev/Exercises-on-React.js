import "../public/styles.css";
import React, { useState, useEffect } from "react";
import WindowSizeComponent from "./WindowSizeComponent";

function App() {
  const [bgColor, setBgColor] = useState("");

  // Function to update style depending on window width
  const updateBgColor = (deviceType) => {
    const color =
      deviceType === "mobile"
        ? "lightblue"
        : deviceType === "tablet"
        ? "lightgreen"
        : deviceType === "pc"
        ? "lightcoral"
        : "white";
    setBgColor(color);
  };

  // Update body style when bgColor changes
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    // <div style={{ backgroundColor: bgColor }}> // using inline styling
    <div className="App">
      <h1>Window Size Tracker</h1>
      <WindowSizeComponent onResize={updateBgColor} />
      <p>Current background color: {bgColor}</p>
    </div>
    // </div>
  );
}

export default App;

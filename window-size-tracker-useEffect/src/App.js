import "../public/styles.css";
import React, { useState, useEffect } from "react";
import WindowSizeComponent from "./WindowSizeComponent";
import UpdateBgColor from "./UpdateBgColor";

function App() {
  const [bgColor, setBgColor] = useState("");
  const [device, setDevice] = useState("");

  // Handles device type changes
  const handleDeviceChange = (device) => {
    setDevice(device);
  };

  // Handles background color changes
  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  // Update body style when bgColor changes
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div className="App">
      <h1>Window Size Tracker</h1>
      <WindowSizeComponent onDeviceChange={handleDeviceChange} />
      <UpdateBgColor device={device} onBgColorChange={handleBgColorChange} />
      <p>Current background color: {bgColor}</p>
    </div>
  );
}

export default App;

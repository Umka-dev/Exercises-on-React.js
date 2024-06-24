import "../public/styles.css";
import React, { useState, useCallback } from "react";
import WindowSizeComponent from "./WindowSizeComponent";
import UpdateBgColor from "./UpdateBgColor";

function App() {
  const [device, setDevice] = useState("");

  // Handles device type changes
  const handleDeviceChange = useCallback((deviceType) => {
    setDevice(deviceType);
  }, []);

  // Update body style when bgColor changes
  return (
    <div className="App">
      <h1>Window Size Tracker</h1>
      <WindowSizeComponent
        device={device}
        onDeviceChange={handleDeviceChange}
      />
      <UpdateBgColor device={device} />
    </div>
  );
}

export default App;

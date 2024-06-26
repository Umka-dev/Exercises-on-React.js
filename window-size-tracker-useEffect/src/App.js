// import "./styles.css";
import React, { useState, useCallback } from "react";
import WindowSizeComponent from "./WindowSizeComponent";
import UpdateBgColor from "./UpdateBgColor";
import DeviceContext from "./DeviceContext";

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
      <DeviceContext.Provider value={device}>
        <WindowSizeComponent onDeviceChange={handleDeviceChange} />
        <UpdateBgColor />
      </DeviceContext.Provider>
    </div>
  );
}

export default App;

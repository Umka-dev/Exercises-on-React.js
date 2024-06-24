import React, { useState, useEffect } from "react";

function WindowSizeComponent({ onDeviceChange }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState();

  useEffect(() => {
    // Window resizing handler
    function handleResize() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Detecting device type depending on screen width
      const newDevice =
        newWidth <= 600 ? "mobile" : newWidth <= 900 ? "tablet" : "pc";

      // Make sure the callback is only called when the device changes
      if (newDevice !== device) {
        setDevice(newDevice);
        onDeviceChange(newDevice);
      }
    }

    handleResize();
    console.log("Current device: " + device);

    // Subscribe to a window resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function: unsubscribe from window resize event
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [device, onDeviceChange]); // Effect depends on device type and callback onResize

  return (
    <div>
      <p>Current window width: {windowWidth}px</p>
      <p>Current device: {device}</p>
    </div>
  );
}

export default WindowSizeComponent;

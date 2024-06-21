import React, { useState, useEffect } from "react";

function WindowSizeComponent({ onResize }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState();

  useEffect(() => {
    // Window resizing handler
    function handleResize() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      const deviceType =
        newWidth <= 600 ? "mobile" : newWidth <= 900 ? "tablet" : "pc";
      setDevice(deviceType);
      onResize(deviceType);
    }

    console.log("Current device: " + device);

    // Subscribe to a window resize event
    window.addEventListener("resize", handleResize);

    // Initialization when the component is first loaded
    handleResize();

    // Cleanup function: unsubscribe from window resize event
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, onResize]); // Effect depends on screen size change and props - onResize

  return (
    <div>
      <p>Current window width: {windowWidth}px</p>
      <p>Current device: {device}</p>
    </div>
  );
}

export default WindowSizeComponent;

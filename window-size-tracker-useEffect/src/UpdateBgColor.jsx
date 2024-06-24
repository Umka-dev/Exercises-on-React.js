import React, { useEffect } from "react";
import WindowSizeComponent from "./WindowSizeComponent";

// Function to update color depending on device
function UpdateBgColor({ device, onBgColorChange }) {
  useEffect(() => {
    const color =
      device === "mobile"
        ? "lightblue"
        : device === "tablet"
        ? "lightgreen"
        : device === "pc"
        ? "lightcoral"
        : "white";

    onBgColorChange(color);
  }, [device, onBgColorChange]);

  return null;
}
export default UpdateBgColor;

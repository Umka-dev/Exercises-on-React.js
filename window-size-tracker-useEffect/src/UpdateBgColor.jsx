import React, { useState, useEffect } from 'react';

// Function to update color depending on device
function UpdateBgColor({ device }) {
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    const color =
      device === 'mobile'
        ? 'lightblue'
        : device === 'tablet'
        ? 'lightgreen'
        : device === 'pc'
        ? 'lightcoral'
        : 'white';
    setBgColor(color);
    document.body.style.backgroundColor = color;
  }, [device]);

  return <p>Current background color: {bgColor}</p>;
}
export default UpdateBgColor;

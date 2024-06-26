import React, { useState, useEffect, useContext } from 'react';
import DeviceContext from './DeviceContext';

// Function to update color depending on device
function UpdateBgColor() {
  const device = useContext(DeviceContext);
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

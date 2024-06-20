import React, { useState, useEffect } from 'react';

function WindowSizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Window resizing handler
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Subscribe to a window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup function: unsubscribe from window resize event
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array, effect executed only once

  return (
    <div>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
}

export default WindowSizeComponent;

import React, { useState, useEffect } from "react";

function WindowSizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Обработчик изменения размера окна
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Подписка на событие изменения размера окна
    window.addEventListener("resize", handleResize);

    // Функция очистки: отписка от события изменения размера окна
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей, эффект выполняется только один раз

  return (
    <div>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
}

export default WindowSizeComponent;

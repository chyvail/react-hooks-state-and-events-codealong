import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(true);
  const color = isOn ? "red" : "blue";
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <button style={{ background: color }} onClick={handleToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

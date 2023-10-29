import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>;
}

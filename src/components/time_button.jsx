import React from "react";
import "../components/time_button_style.css";
function TimeButton({ time }) {
  return (
    <div className="container">
      <p>{time}</p>
    </div>
  );
}

export default TimeButton;

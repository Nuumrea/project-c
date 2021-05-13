import React from "react";

// Style
import "./index.css";

const countdown = ({ data }) => {
  return (
    <div>
      <div className="countdown-nb">
        <span>{data.number}</span>
      </div>
      <div className="countdown-txt">
        <span>{data.text}</span>
      </div>
    </div>
  );
};

export default countdown;

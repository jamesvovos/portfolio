import React from "react";

export default function ProgressBar({ title, width, text }) {
  return (
    <div>
      <h6 className="text-white text-lg font font-medium">{title}</h6>
      <div className="progress-bar">
        <p className="pr-5 text-gray-400">{text}</p>
        <div className="progress">
          <span className="barSpan" style={{ width: width }}></span>
        </div>
      </div>
    </div>
  );
}

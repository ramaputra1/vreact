// components/Button.jsx
import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <a
      {...props}
      className={`btn px-2 py-2 rounded transition-colors duration-300 ${className}`}
    >
      {" "}
      {children}
    </a>
  );
}

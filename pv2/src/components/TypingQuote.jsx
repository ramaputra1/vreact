import React, { useState, useEffect } from "react";

function TypingQuote({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return (
    <p style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {displayedText}|
    </p>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <TypingQuote
        text="Life is what happens when you're busy making other plans."
        speed={100}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";

const quotes = [
  "Let's Connect!",
  "Connect Idea through Code.",
  "Avaiable to collaborate, work, or just drinking hot chocolate.",
  "Text me! :)",
];

export default function TypingQuotesLoop() {
  const [displayedText, setDisplayedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(150);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    let timer;

    if (!isDeleting && displayedText === currentQuote) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    } else {
      timer = setTimeout(
        () => {
          setDisplayedText((prev) => {
            if (isDeleting) {
              return currentQuote.substring(0, prev.length - 1);
            } else {
              return currentQuote.substring(0, prev.length + 1);
            }
          });
        },
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, quoteIndex, speed]);

  return (
    <p className="font-mono text-md  w-80">
      {displayedText}
      <span className="inline-block w-1 ml-1 bg-black animate-blink">
        &nbsp;
      </span>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            50.01%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </p>
  );
}

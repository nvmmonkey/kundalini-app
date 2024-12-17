"use client"

import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 50, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isTyping && !isDeleting) {
      if (displayText.length === text.length) {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        // Type out next character
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, delay);
      }
    } else if (isDeleting) {
      if (displayText.length === 0) {
        // Reset for next loop
        setIsDeleting(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseDuration);
      } else {
        // Delete one character
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, delay / 2); // Deleting is faster than typing
      }
    }

    return () => clearTimeout(timeout);
  }, [text, delay, displayText, isTyping, isDeleting, pauseDuration]);

  return (
    <>
      {displayText}
      <span
        className="inline-block w-2 xs:h-3 lg:h-5 ml-1 bg-pink-400/80"
        style={{
          animation: "blink 0.7s steps(1) infinite"
        }}
      />
    </>
  );
};

  export default TypewriterText
"use client"

import { useEffect, useState } from "react";

const TypewriterText = ({ 
  text, 
  delay = 50, 
  pauseDuration = 2000,
  loop = false,
  deleteOnComplete = false,
  showCursor = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isComplete) return;

    if (isTyping && !isDeleting) {
      if (displayText.length === text.length) {
        if (!loop && !deleteOnComplete) {
          setIsComplete(true);
          return;
        }
        // Wait before starting to delete
        timeout = setTimeout(() => {
          if (deleteOnComplete || loop) {
            setIsDeleting(true);
          }
        }, pauseDuration);
      } else {
        // Type out next character
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, delay);
      }
    } else if (isDeleting) {
      if (displayText.length === 0) {
        if (!loop) {
          setIsComplete(true);
          return;
        }
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
  }, [text, delay, displayText, isTyping, isDeleting, pauseDuration, loop, deleteOnComplete, isComplete]);

  return (
    <>
      {displayText}
      {showCursor && (
        <span
          className="inline-block w-2 xs:h-3 lg:h-5 ml-1 bg-pink-400/80"
          style={{
            animation: "blink 0.7s steps(1) infinite"
          }}
        />
      )}
    </>
  );
};

export default TypewriterText;
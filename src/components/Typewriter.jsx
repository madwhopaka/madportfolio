import React, { useState, useEffect } from "react";
import "../typewriter.css"; // Import CSS file for cursor animation

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingDirection, setTypingDirection] = useState("typing");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout;

        if (typingDirection === "typing") {
            if (currentIndex < text.length) {
                timeout = setTimeout(() => {
                    setCurrentText((prevText) => prevText + text[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }, delay);
            } else {
                // If typing is complete, start erasing
                setTypingDirection("erasing");
            }
        } else if (typingDirection === "erasing") {
            if (currentIndex > 0) {
                timeout = setTimeout(() => {
                    setCurrentText((prevText) => prevText.slice(0, -1));
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                }, delay);
            } else {
                // If erasing is complete, start typing again
                setTypingDirection("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text, typingDirection]);

    useEffect(() => {
        // Toggle cursor visibility every 500ms
        const interval = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="typewriter-text">
            {currentText}
            <span className={`cursor ${showCursor ? "blink" : ""}`}>|</span>
        </span>
    );
};

export default Typewriter;

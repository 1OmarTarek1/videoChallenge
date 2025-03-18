import { useState, useEffect } from "react";
import "./SeekBar.css";

const SeekBar = ({ videoRef }) => {
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false); // Track if user is dragging

    useEffect(() => {
        if (!videoRef.current) return;

        const updateProgress = () => {
            if (!isDragging) { // Prevent overwriting progress while dragging
                const currentTime = videoRef.current.currentTime;
                const duration = videoRef.current.duration;
                setProgress((currentTime / duration) * 100 || 0);
            }
        };

        videoRef.current.addEventListener("timeupdate", updateProgress);

        return () => {
            videoRef.current.removeEventListener("timeupdate", updateProgress);
        };
    }, [videoRef, isDragging]);

    return (
        <input
            type="range"
            className="seek-bar"
            min="0"
            max="100"
            value={progress}
            onMouseDown={() => setIsDragging(true)} // Start dragging
            onMouseUp={() => setIsDragging(false)}  // Stop dragging
            onChange={(e) => {
                const newProgress = parseFloat(e.target.value);
                setProgress(newProgress); // Update UI instantly

                if (videoRef.current) {
                    const newTime = (newProgress / 100) * videoRef.current.duration;
                    videoRef.current.currentTime = newTime;
                }
            }}
            style={{ "--progress": `${progress}%` }}
        />
    );
};

export default SeekBar;

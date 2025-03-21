import { useState, useEffect } from "react";
import "./SeekBar.css";

const SeekBar = ({ videoRef, currentTime, setCurrentTime }) => {
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [wasPlaying, setWasPlaying] = useState(false); // 🛑 Track video play state

    useEffect(() => {
        if (!videoRef.current || isDragging) return;

        const duration = videoRef.current.duration;
        if (duration) {
            setProgress((currentTime / duration) * 100);
        }
    }, [currentTime, isDragging]);

    const handleSeekStart = () => {
        if (videoRef.current) {
            setWasPlaying(!videoRef.current.paused); // 🔴 Save play state
            videoRef.current.pause(); // ⏸ Pause video while seeking
        }
        setIsDragging(true);
    };

    const handleSeek = (e) => {
        const newProgress = parseFloat(e.target.value);
        setProgress(newProgress);

        if (videoRef.current) {
            const newTime = (newProgress / 100) * videoRef.current.duration;
            setCurrentTime(newTime);
            videoRef.current.currentTime = newTime;
        }
    };

    const handleSeekEnd = () => {
        setIsDragging(false);
        if (wasPlaying && videoRef.current) {
            videoRef.current.play(); // ▶ Resume playing if it was playing before
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="seek-bar-container">
            <input
                type="range"
                className="seek-bar"
                min="0"
                max="100"
                step="0.001"
                value={progress}
                onMouseDown={handleSeekStart}
                onMouseMove={isDragging ? handleSeek : null}
                onMouseUp={handleSeekEnd}
                onTouchStart={handleSeekStart}
                onTouchMove={handleSeek}
                onTouchEnd={handleSeekEnd}
                onInput={handleSeek}
                style={{ "--progress": `${progress}%` }}
            />
            
            {/* {previewTime !== null && hoverPosition !== null && (
                <div className="preview-box" style={{ left: `${hoverPosition}%` }}>
                    {thumbnail && <img src={thumbnail} alt="Preview" />}
                    <p>{formatTime(previewTime)}</p>
                </div>
            )}
            <canvas ref={thumbnailCanvas} style={{ display: "none" }} /> */}
        </div>
    );
};

export default SeekBar;

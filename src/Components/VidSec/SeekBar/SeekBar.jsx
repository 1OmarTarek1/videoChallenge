import { useState, useEffect } from 'react';
import './SeekBar.css';

const SeekBar = ({ videoRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!videoRef.current) return;

        const updateProgress = () => {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((currentTime / duration) * 100 || 0);
        };

        videoRef.current.addEventListener('timeupdate', updateProgress);

        return () => {
            videoRef.current.removeEventListener('timeupdate', updateProgress);
        };
    }, [videoRef]);

    return (
        <input
            type="range"
            className="seek-bar"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
                if (videoRef.current) {
                    const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
                    videoRef.current.currentTime = newTime;
                }
            }}
            style={{ "--progress": `${progress}%` }}  // 🟢 تمرير `progress` إلى الـ CSS
        />
    );
};

export default SeekBar;

import { useEffect, useState } from "react";
import { FaVolumeXmark, FaVolumeOff, FaVolumeLow, FaVolumeHigh } from "react-icons/fa6";
import "./VolumeBtn.css";

const VolumeBtn = ({ videoRef }) => {
    const [volume, setVolume] = useState(0.5);


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!videoRef.current) return;

            if (event.key === "ArrowUp") {
                event.preventDefault();
                const newVolume = Math.min(volume + 0.1, 1);
                videoRef.current.volume = newVolume;
                setVolume(newVolume);
            } else if (event.key === "ArrowDown") {
                event.preventDefault();
                const newVolume = Math.max(volume - 0.1, 0);
                videoRef.current.volume = newVolume;
                setVolume(newVolume);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [volume, setVolume, videoRef]);
    useEffect(() => {
        document.documentElement.style.setProperty("--volume", `${volume * 100}%`);
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]); 


    const toggleMute = () => {
        if (!videoRef.current) return;
    
        if (videoRef.current.muted || volume === 0) {
            // Unmute: Restore volume (default to 0.5 if it was 0)
            videoRef.current.muted = false;
            const restoredVolume = videoRef.current.volume > 0 ? videoRef.current.volume : 0.5;
            setVolume(restoredVolume);
        } else {
            // Mute: Set volume to 0
            videoRef.current.muted = true;
            setVolume(0);
        }
    };
    const handleVolumeChange = (e) => {
        if (!videoRef.current) return;
        const newVolume = parseFloat(e.target.value);
        videoRef.current.volume = newVolume;
        videoRef.current.muted = newVolume === 0;
        setVolume(newVolume);
    };
    const getVolumeIcon = () => {
        if (volume === 0) return <FaVolumeXmark size={18} />;
        if (volume <= 0.1) return <FaVolumeOff size={16} />;
        if (volume < 0.5) return <FaVolumeLow size={16} />;
        return <FaVolumeHigh size={18} />;
    };


    return (
        <div className="volume-container">
            <button className="volume-icon" onClick={toggleMute}>
                {getVolumeIcon()}
            </button>
            <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeBtn;

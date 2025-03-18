import { useEffect } from "react";
import { TbRewindForward5 } from "react-icons/tb";
import { MdReplay } from "react-icons/md";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import "./HoverLayout.css";

const HoverLayout = ({ videoRef, handleVideoClick, isEnded, setIsEnded, isPlaying, setIsPlaying }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!videoRef.current) return;
        
            if (event.key === "ArrowRight") {
                videoRef.current.currentTime += 5;
            } else if (event.key === "ArrowLeft") {
                videoRef.current.currentTime -= 5;
            } else if (event.key === " " || event.code === "Space") {
                event.preventDefault(); // Prevent scrolling
        
                if (isEnded) {
                    videoRef.current.currentTime = 0; // Restart video
                    videoRef.current.play();
                    setIsEnded(false);
                    setIsPlaying(true);
                } else if (isPlaying) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                } else {
                    videoRef.current.play();
                    setIsPlaying(true);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [videoRef,isPlaying,isEnded,setIsEnded,setIsPlaying]);

    return (
        <div className="vidHoverControls" >
            <button onClick={() => (videoRef.current.currentTime -= 5)}>
                <TbRewindForward5 style={{ transform: "rotate(-180deg)" }} />
            </button>

            <button onClick={handleVideoClick}>
                {isEnded ? <MdReplay /> : isPlaying ? <IoIosPause /> : <IoIosPlay />}
            </button>

            <button onClick={() => (videoRef.current.currentTime += 5)}>
                <TbRewindForward5 />
            </button>
        </div>
    );
};

export default HoverLayout;
 
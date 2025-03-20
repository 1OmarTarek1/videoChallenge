import { useRef, useState, useEffect } from "react";
import { 
    CinemaVidBtn, FullScrnVidBtn, HoverLayout, 
    NextVidBtn, PlayVidBtn, PreviousVidBtn, 
    SeekBar, SettingBtn, SmlVidBtn, 
    StartVidImg, TimeView, VolumeBtn 
} from "../../Components";
import mainVid from "../../Assets/Videos/01.mp4";
import "./VidSec.css";

const VidSec = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isEnded, setIsEnded] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true); 
    const [isPlayingFirstTime, setIsPlayingFirstTime] = useState(false);
    const [isCinemaMode, setIsCinemaMode] = useState(false);


    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement);

            const videoControls = document.querySelector(".video-controls");
            const videoWrapper = document.querySelector(".video-wrapper");

            if (document.fullscreenElement) {
                videoControls.classList.add("show-controls");
                if (videoWrapper) {
                    videoWrapper.classList.add("show-controls"); // Add to wrapper if needed
                }
            } else {
                videoControls.classList.remove("show-controls");
                if (videoWrapper) {
                    videoWrapper.classList.remove("show-controls"); // Remove from wrapper if needed
                }
            }
        };

        document.addEventListener("fullscreenchange", handleFullScreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullScreenChange);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
    
        let animationFrameId;
    
        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
            setIsEnded(video.currentTime >= video.duration); // ✅ Check if video ended
        };
    
        const updateProgressSmoothly = () => {
            setCurrentTime(video.currentTime);
            animationFrameId = requestAnimationFrame(updateProgressSmoothly);
        };
    
        const handleDragStart = () => {
            cancelAnimationFrame(animationFrameId); // Stop animation during drag
        };
    
        const handleDragEnd = () => {
            updateTime(); // Ensure final update
            animationFrameId = requestAnimationFrame(updateProgressSmoothly); // Resume smooth updates
        };
    
        const handleVideoEnd = () => {
            setIsEnded(true); // ✅ Mark video as ended
        };
    
        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", updateTime);
        video.addEventListener("seeking", handleDragStart);
        video.addEventListener("seeked", handleDragEnd);
        video.addEventListener("ended", handleVideoEnd); // ✅ Listen for video end
    
        animationFrameId = requestAnimationFrame(updateProgressSmoothly); // Start smooth updates
    
        return () => {
            video.removeEventListener("timeupdate", updateTime);
            video.removeEventListener("loadedmetadata", updateTime);
            video.removeEventListener("seeking", handleDragStart);
            video.removeEventListener("seeked", handleDragEnd);
            video.removeEventListener("ended", handleVideoEnd); // ✅ Cleanup
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const videoWrapper = document.querySelector(".video-wrapper");
        if (!videoWrapper) return;

        let timeout;

        const showControls = () => {
            setControlsVisible(true);
            videoWrapper.style.cursor = "default";
            clearTimeout(timeout);
            timeout = setTimeout(hideControls, 2000);
        };

        const hideControls = () => {
            if (document.fullscreenElement) {
                setControlsVisible(false);
                videoWrapper.style.cursor = "none";
            }
        };

        ["mousemove", "touchstart", "touchmove"].forEach(event =>
            videoWrapper.addEventListener(event, showControls)
        );
        videoWrapper.addEventListener("mouseleave", hideControls);

        return () => {
            ["mousemove", "touchstart", "touchmove"].forEach(event =>
                videoWrapper.removeEventListener(event, showControls)
            );
            videoWrapper.removeEventListener("mouseleave", hideControls);
        };
    }, []);

    const isDesktop = () => {
        return !/Mobi|Android|iPhone|iPad|iPod|Opera Mini|BlackBerry|IEMobile|WPDesktop/i.test(navigator.userAgent);
    };
    


    const handleVideoClick = () => {
        if (videoRef.current) {
            setIsPlayingFirstTime(true)
            if (isEnded) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsEnded(false);
                setIsPlaying(true);
            } else {
                if (videoRef.current.paused) {
                    videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            }
        }
    };


    return (
        <div 
        className={` video-wrapper 
                ${ !controlsVisible && document.fullscreenElement && 'hide-controls' }
                ${ isPlaying &&  'isPlaying'}
                ${ isCinemaMode  &&  'cinema-mode'}
                ${ isFullScreen  &&  'FullScreen-mode'}
        `}>
            <StartVidImg 
                isPlayingFirstTime={isPlayingFirstTime} 
                handleVideoClick={handleVideoClick} 
            />
            <video
                ref={videoRef}
                className={` ${!isPlaying && 'video-paused'} main-video`}
                src={mainVid}
                type="video/mp4"
                onClick={isDesktop() ? handleVideoClick : undefined}
                controls={false}
                onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
                controlsList="nodownload nofullscreen noremoteplayback"
            >Your browser does not support the video tag. </video>

            <SeekBar 
            videoRef={videoRef} 
            currentTime={currentTime} 
            setCurrentTime={setCurrentTime} 
            />
            <HoverLayout 
                videoRef={videoRef} 
                handleVideoClick={handleVideoClick} 
                isEnded={isEnded} 
                isPlaying={isPlaying} 
                setIsEnded={setIsEnded}
                setIsPlaying={setIsPlaying}
            />

            <div className={`video-controls 
                ${ controlsVisible 
                || !document.fullscreenElement 
                ? 'show-controls' : '' }
            `}>
                <PreviousVidBtn />
                <PlayVidBtn 
                    handleVideoClick={handleVideoClick}
                    isPlaying={isPlaying}
                    isEnded={isEnded }
                />
                <NextVidBtn />
                <VolumeBtn videoRef={videoRef} />
                <TimeView currentTime={currentTime} duration={duration} />
                <SettingBtn />
                <SmlVidBtn videoRef={videoRef} />
                <CinemaVidBtn setIsCinemaMode={setIsCinemaMode} />
                <FullScrnVidBtn isFullScreen={isFullScreen} videoRef={videoRef} />
            </div>
        </div>
    );
};

export default VidSec;





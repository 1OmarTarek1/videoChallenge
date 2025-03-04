import { useRef, useState, useEffect } from "react";
import mainVid from "../../Assets/Videos/01.mp4";
import startImg from '../../Assets/Images/Other/startImg.jpg'
import { MdOutlineRectangle, MdReplay, MdSkipNext } from "react-icons/md";
import { RiFullscreenExitFill, RiFullscreenFill, RiPictureInPictureFill } from "react-icons/ri";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { TbRewindForward5 } from "react-icons/tb";
import { FaVolumeXmark, FaVolumeOff, FaVolumeLow, FaVolumeHigh, FaGear } from "react-icons/fa6";
import "./VidSec.css";

const VidSec = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
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

        const updateProgress = () => {
            if (video && video.duration) {
                setCurrentTime(video.currentTime);
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        const updateDuration = () => {
            if (video) setDuration(video.duration);
        };

        const handleVideoEnd = () => {
            setIsPlaying(false);
            setIsEnded(true);
            setProgress(100);
        };

        if (video) {
            video.addEventListener("timeupdate", updateProgress);
            video.addEventListener("loadedmetadata", updateDuration);
            video.addEventListener("ended", handleVideoEnd);
        }

        return () => {
            video?.removeEventListener("timeupdate", updateProgress);
            video?.removeEventListener("loadedmetadata", updateDuration);
            video?.removeEventListener("ended", handleVideoEnd);
        };
    }, []);

    useEffect(() => {
        const seekBar = document.querySelector(".seek-bar");
        if (seekBar) {
            seekBar.style.setProperty("--progress", `${progress}%`);
        }
    }, [progress]);

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

    useEffect(() => {
        document.documentElement.style.setProperty("--volume", `${volume * 100}%`);
        
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]); // يتنفذ كل ما `volume` يتغير



    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setVolume(video.muted ? 0 : 0.5);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value)); // تحديث الـ volume
    };

    const getVolumeIcon = () => {
        if (volume === 0) return <FaVolumeXmark size={18}/>;
        if (volume <= 0.1) return <FaVolumeOff size={16}/>;
        if (volume < 0.5) return <FaVolumeLow size={16}/>;
        return <FaVolumeHigh size={18}/>;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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

    const handleDoubleClick = () => {
        const videoWrapper = document.querySelector(".video-wrapper");

        if (!document.fullscreenElement) {
            videoWrapper.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const toggleCinemaMode = () => {
        const videoWrapper = document.querySelector(".video-wrapper");

        if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsCinemaMode(true);
        } else {
            setIsCinemaMode(prev => !prev);
        }
    };

    const toggleFullScreen = () => {
        const videoWrapper = document.querySelector(".video-wrapper");
    
        if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
                videoWrapper.requestFullscreen();
            } else if (videoWrapper.mozRequestFullScreen) { // Firefox
                videoWrapper.mozRequestFullScreen();
            } else if (videoWrapper.webkitRequestFullscreen) { // Chrome, Safari, Opera
                videoWrapper.webkitRequestFullscreen();
            } else if (videoWrapper.msRequestFullscreen) { // IE/Edge
                videoWrapper.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    };
    


    return (
        <div 
        className={` video-wrapper 
                ${ !controlsVisible && document.fullscreenElement && 'hide-controls' }
                ${ isPlaying &&  'isPlaying'}
                ${ isCinemaMode  &&  'cinema-mode'}
            `}>
            <div 
            className={`imgWrapper ${ isPlayingFirstTime &&  'playing-firstTime'} `}
            onClick={handleVideoClick}
            >
                <img className="startImg" src={startImg} alt="Start Image" />
                <button className="btnImg">
                    <IoIosPlay />
                </button>
            </div>
            <video
                ref={videoRef}
                className={` ${!isPlaying && 'video-paused'} main-video`}
                src={mainVid}
                type="video/mp4"
                onClick={handleVideoClick}
                onDoubleClick={handleDoubleClick}
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
            >
                Your browser does not support the video tag.
            </video>


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
            />

            <div className="vidHoverControls"
                 onDoubleClick={handleDoubleClick}
            >

                <button onClick={() => (videoRef.current.currentTime -= 5)}>
                    <TbRewindForward5 style={{transform:"rotate(-180deg)"}}/>
                </button>

                <button onClick={handleVideoClick}>
                    {
                        isEnded ? <MdReplay />
                            : isPlaying ? <IoIosPause />
                                : <IoIosPlay />
                    }
                </button>

                <button onClick={() => (videoRef.current.currentTime += 5)}>
                    <TbRewindForward5 />
                </button>
            </div>

            <div className={`video-controls ${controlsVisible || !document.fullscreenElement ? 'show-controls' : ''}`}>

                <button>
                    <MdSkipNext size={20} style={{transform:"rotate(-180deg)"}}/>
                </button>

                <button onClick={handleVideoClick}>
                    {isEnded ? <MdReplay size={19}/> : isPlaying ? <IoIosPause  size={20}/> : <IoIosPlay size={20}/>}
                </button>

                <button>
                    <MdSkipNext size={20}/>
                </button>


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

                <div className="time-display">
                    <span>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>

                <button>
                    <FaGear size={16}/>
                </button>

                <button
                    onClick={async () => {
                        if (document.pictureInPictureElement) {
                            await document.exitPictureInPicture();
                        } else {
                            if (videoRef.current) {
                                await videoRef.current.requestPictureInPicture();
                            }
                        }
                    }}
                >
                    <RiPictureInPictureFill size={19}/>
                </button>

                <button
                    className="cinemaBtn"
                    onClick={toggleCinemaMode}>
                    <MdOutlineRectangle size={21}/>
                </button>

                <button onClick={toggleFullScreen}>
                    { isFullScreen
                        ? <RiFullscreenExitFill size={18}/>
                        : <RiFullscreenFill size={18} />
                    }

                </button>
            </div>
        </div>
    );
};

export default VidSec;





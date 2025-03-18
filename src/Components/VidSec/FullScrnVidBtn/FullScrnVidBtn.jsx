import React, { useEffect } from 'react'
import { RiFullscreenExitFill, RiFullscreenFill } from 'react-icons/ri'
import './FullScrnVidBtn.css'




const FullScrnVidBtn = ({ isFullScreen, videoRef }) => {

    const handleDoubleClick = () => {
        const videoWrapper = document.querySelector(".video-wrapper");
    
        if (!document.fullscreenElement) { 
            if (videoWrapper && videoWrapper.requestFullscreen) { 
                videoWrapper.requestFullscreen().then(() => { 
                    // Lock screen to landscape mode on mobile
                    if (screen.orientation && screen.orientation.lock) { 
                        screen.orientation.lock("landscape").catch(err => {
                            console.warn("تعذر قفل الاتجاه:", err);
                        });
                    }
                });
            }
        } else { 
            if (document.exitFullscreen) { 
                document.exitFullscreen().then(() => { 
                    // Unlock screen orientation when exiting fullscreen
                    if (screen.orientation && screen.orientation.unlock) { 
                        screen.orientation.unlock();
                    }
                });
            }
        }
    };

    useEffect(() => {
        const videoElement = videoRef?.current;
        if (videoElement) {
            videoElement.addEventListener("dblclick", handleDoubleClick);
        }
        return () => {
            if (videoElement) {
                videoElement.removeEventListener("dblclick", handleDoubleClick);
            }
        };
    }, [videoRef]);


    

    
    return (
        <button onClick={handleDoubleClick}>
            { isFullScreen
                ? <RiFullscreenExitFill size={18}/>
                : <RiFullscreenFill size={18} />
            }
        </button>
    )
}

export default FullScrnVidBtn
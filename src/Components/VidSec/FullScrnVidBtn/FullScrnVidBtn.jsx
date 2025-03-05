import { RiFullscreenExitFill, RiFullscreenFill } from 'react-icons/ri'
import './FullScrnVidBtn.css'



import React from 'react'

const FullScrnVidBtn = ({ isFullScreen}) => {
    const toggleFullScreen = () => {
        const videoWrapper = document.querySelector(".video-wrapper");
    
        if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
                videoWrapper.requestFullscreen().then(() => {
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
                    if (screen.orientation && screen.orientation.unlock) {
                        screen.orientation.unlock();
                    }
                });
            }
        }
    };
    return (
        <button onClick={toggleFullScreen}>
            { isFullScreen
                ? <RiFullscreenExitFill size={18}/>
                : <RiFullscreenFill size={18} />
            }
        </button>
    )
}

export default FullScrnVidBtn
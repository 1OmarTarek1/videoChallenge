import { MdReplay } from 'react-icons/md'
import { IoIosPause, IoIosPlay } from 'react-icons/io'
import './PlayVidBtn.css'




const PlayVidBtn = ({handleVideoClick, isPlaying, isEnded}) => {
    return (
        <button onClick={handleVideoClick}>
            {isEnded ? <MdReplay size={19}/> : isPlaying ? <IoIosPause  size={20}/> : <IoIosPlay size={20}/>}
        </button>
    )
    }

export default PlayVidBtn
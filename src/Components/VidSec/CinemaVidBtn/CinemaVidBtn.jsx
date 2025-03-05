import { MdOutlineRectangle } from 'react-icons/md'
import './CinemaVidBtn.css'



const CinemaVidBtn = ({setIsCinemaMode}) => {

    const toggleCinemaMode = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsCinemaMode(true);
        } else {
            setIsCinemaMode(prev => !prev);
        }
    };
    return (
        <button
            className="cinemaBtn"
            onClick={toggleCinemaMode}>
            <MdOutlineRectangle size={21}/>
        </button>
    )
}

export default CinemaVidBtn
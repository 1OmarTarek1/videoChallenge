import { IoIosPlay } from 'react-icons/io';
import startImg from '../../../Assets/Images/Other/startImg.jpg'
import './StartVidImg.css';




const StartVidImg = ({ isPlayingFirstTime, handleVideoClick }) => {
    return (
        <div 
            className={`imgWrapper ${isPlayingFirstTime ? 'playing-firstTime' : ''}`}
            onClick={handleVideoClick}
        >
            <img className="startImg" src={startImg} alt="Start Image" />
            <button className="btnImg">
                <IoIosPlay />
            </button>
        </div>
    );
};

export default StartVidImg;

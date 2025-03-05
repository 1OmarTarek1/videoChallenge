import { RiPictureInPictureFill } from 'react-icons/ri';
import './SmlVidBtn.css';



const SmlVidBtn = ({ videoRef }) => {
    const handlePiP = async () => {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            if (videoRef?.current) {
                await videoRef.current.requestPictureInPicture();
            }
        }
    };

    return (
        <button onClick={handlePiP}>
            <RiPictureInPictureFill size={19} />
        </button>
    );
};

export default SmlVidBtn;

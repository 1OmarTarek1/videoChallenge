import { MdSkipNext } from 'react-icons/md'
import './PreviousVidBtn.css'



const PreviousVidBtn = () => {
    return (
        <button className="PreviousVidBtn">
            <MdSkipNext size={20} style={{transform:"rotate(-180deg)"}}/>
        </button>
    )
}

export default PreviousVidBtn
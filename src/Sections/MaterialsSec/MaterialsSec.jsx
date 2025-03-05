import { RiBookShelfLine } from 'react-icons/ri'
import { FaRegClock } from 'react-icons/fa6'
import { BiBookReader } from 'react-icons/bi'
import { GrLanguage } from 'react-icons/gr'
import './MaterialsSec.css'




const MaterialsSec = () => {
    return (
        <div className="course-materials">
            <h2>Course Materials</h2>
            
            <div className="materials-wrapper">
                {/* First Box */}
                <div className="materials-container">
                    <div className="material-item">
                        <span><FaRegClock /> Duration:</span> 
                        3 weeks
                        </div>
                    <div className="material-item">
                        <span><RiBookShelfLine size={20}/> Lessons:</span> 
                        8
                    </div>
                    <div className="material-item">
                        <span><BiBookReader size={20} />Enrolled:</span> 
                        65 students
                    </div>
                    <div className="material-item">
                        <span><GrLanguage />Language:</span> 
                        English
                    </div>
                </div>

                {/* Second Box */}
                <div className="materials-container">
                    <div className="material-item">
                        <span><FaRegClock /> Duration:</span> 
                        3 weeks
                    </div>
                    <div className="material-item">
                        <span><RiBookShelfLine size={20}/> Lessons:</span> 
                        8
                    </div>
                    <div className="material-item">
                        <span><BiBookReader size={20} /> Enrolled:</span> 
                        65 students
                    </div>
                    <div className="material-item">
                        <span><GrLanguage /> Language:</span> 
                        English
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialsSec
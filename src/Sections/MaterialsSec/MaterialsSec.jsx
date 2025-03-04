import './MaterialsSec.css'




const MaterialsSec = () => {
    return (
        <div className="course-materials">
            <h2>Course Materials</h2>
            
            <div className="materials-wrapper">
                {/* First Box */}
                <div className="materials-container">
                    <div className="material-item">📅 <span>Duration:</span> 3 weeks</div>
                    <div className="material-item">📚 <span>Lessons:</span> 8</div>
                    <div className="material-item">👨‍🎓 <span>Enrolled:</span> 65 students</div>
                    <div className="material-item">🌍 <span>Language:</span> English</div>
                </div>

                {/* Second Box */}
                <div className="materials-container">
                    <div className="material-item">📅 <span>Duration:</span> 3 weeks</div>
                    <div className="material-item">📚 <span>Lessons:</span> 8</div>
                    <div className="material-item">👨‍🎓 <span>Enrolled:</span> 65 students</div>
                    <div className="material-item">🌍 <span>Language:</span> English</div>
                </div>
            </div>
        </div>
    )
}

export default MaterialsSec
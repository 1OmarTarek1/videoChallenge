import './TimeView.css'




const TimeView = ({ currentTime, duration }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    return (
        <div className="time-display">
            <span>
                {formatTime(currentTime)} / {formatTime(duration)}
            </span>
        </div>
    );
};

export default TimeView;

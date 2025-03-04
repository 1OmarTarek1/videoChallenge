import './TopicCom.css';

const TopicCom = ({ title, ulData, para, id }) => {
    return (
        <div className="topic-list" id={id}>
            <h3>{title}</h3>
            <p className="course-description">
                {para}
            </p>
            <ul>
                <li>{ulData.oneLi}</li>
                <li>{ulData.twoLi}</li>
                <li className="course-item">
                    <span className="course-title">{ulData.threeLi}</span>
                    <div className="course-meta">
                        <span className="questions">{ulData.qus}</span>
                        <span className="time">{ulData.time}</span>
                    </div>
                </li>
                <li>{ulData.fourLi}</li>
                <li>{ulData.fiveLi}</li>
                <li>{ulData.sixLi}</li>
            </ul>
        </div>
    );
};

export default TopicCom;

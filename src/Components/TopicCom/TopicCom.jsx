import { FaRegFileAlt } from 'react-icons/fa';
import './TopicCom.css';
import { MdLockOutline } from 'react-icons/md';

const TopicCom = ({ title, ulData, para, id }) => {
    return (
        <div className="topic-list" id={id}>
            <h3>{title}</h3>
            <p className="course-description">
                {para}
            </p>
            <ul>
                <li>
                    <span>
                        <FaRegFileAlt />
                        {ulData.oneLi}
                    </span>
                    <span></span>
                <MdLockOutline />
                </li>
                <li>
                    <span>
                        <FaRegFileAlt />
                        {ulData.twoLi}
                    </span>
                    <span><MdLockOutline /></span>
                </li>
                <li className="course-item">
                    <span className="course-title">
                        <FaRegFileAlt />
                        {ulData.threeLi}
                    </span>
                    <div className="course-meta">
                        <span className="questions">
                            {ulData.qus}
                        </span>
                        <span className="time">
                            {ulData.time}
                        </span>
                    </div>
                </li>
                <li>
                    <span>
                        <FaRegFileAlt />
                        {ulData.fourLi}
                    </span>
                    <span><MdLockOutline /></span>
                </li>
                <li>
                    <span>
                        <FaRegFileAlt />
                        {ulData.fiveLi}
                    </span>
                    <span><MdLockOutline /></span>
                </li>
                <li>
                    <span>
                        <FaRegFileAlt />
                        {ulData.sixLi}
                    </span>
                    <span><MdLockOutline /></span>
                </li>
            </ul>
        </div>
    );
};

export default TopicCom;

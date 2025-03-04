import { TopicCom } from "../../Components";
import { MaterialsSec, TopicsMobSec, VidSec } from "../../Sections";
import "./CourseDetailPage.css";

const CourseDetailPage = () => {

    return (
        <div className="course-detail-page" >
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb" aria-label="breadcrumb">
                <span>Home &gt; </span>
                <span>Courses &gt; </span>
                <span className="active">Course Details</span>
            </nav>



            <h1>Starting SEO as your Home</h1>
            <div className="course-content">

                <VidSec />
                <MaterialsSec />
                <TopicsMobSec />

                {/* Right Section - Topics & Progress */}
                <div className="right-section">
                    <div className="course-topics w-100">
                        <h5 className="mb-5">Topics for This Course</h5>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: "63%" }}></div>
                        </div>
                        <p>63% Completed</p>
                    </div>

                    <TopicCom  
                    title={"Week 1 - 4"}
                    para={"Advanced storytelling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "📖 Introduction",
                        twoLi: "📖 Course Overview",
                        threeLi: "📖 Course Overview",
                        qus:"0 QUESTIONS",
                        time:"10 MINUTES",
                        fourLi: "📂 Course Exercise / Reference Files",
                        fiveLi: "💻 Code Editor Installation",
                        sixLi: "🖥️ Embedding PHP in HTML"
                    }}
                    id={"week14"}
                    />

                    <TopicCom  
                    title={"Week 5 - 8"}
                    para={"Advanced story telling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "📖 Defining Functions",
                        twoLi: "📖 Function Parameters",
                        threeLi: "📖 Course Overview",
                        qus:"0 QUESTIONS",
                        time:"15 MINUTES",
                        fourLi: "✅ Return Values from Functions",
                        fiveLi: "🌍 Global Variable and Scope",
                        sixLi: "🔢 Constants"
                    }}
                    id={"week58"}
                    />

                    <TopicCom  
                    title={"Week 9 - 12"}
                    para={"Advanced story telling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "📖 Defining Functions",
                        twoLi: "📖 Function Parameters",
                        threeLi: "📖 Course Overview",
                        qus:"0 QUESTIONS",
                        time:"15 MINUTES",
                        fourLi: "✅ Return Values from Functions",
                        fiveLi: "🌍 Global Variable and Scope",
                        sixLi: "🔢 Constants"
                    }}
                    id={"week912"}
                    />

                </div>

                {/* Comments Section */}
                <div className="comments">
                    <h2>Comments</h2>
                    <div className="comment">
                        <img src="https://ui-avatars.com/api/?name=User+Name&background=random" alt="Student" />
                        <div className="comment-content">
                            <h4>Student Name</h4>
                            <p>Oct 12, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="comment">
                        <img src="https://ui-avatars.com/api/?name=User+Name&background=random" alt="Student" />
                        <div className="comment-content">
                            <h4>Student Name</h4>
                            <p>Oct 15, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="review-section">
                        <textarea  id="IDMessage" className="comment-box" placeholder="Write a comment"></textarea>
                        <button className="submit-review-btn">Submit Review →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;

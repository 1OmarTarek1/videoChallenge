import { FaChevronRight } from "react-icons/fa";
import { ProgressBar, TopicCom } from "../../Components";
import { CommentsSec, MaterialsSec, TopicsMobSec, VidSec } from "../../Sections";
import "./CourseDetailPage.css";

const CourseDetailPage = () => {
    return (
        <div className="course-detail-page">
            {/* Breadcrumb Navigation */}
            <h1 className="breadcrumb">
                <span>Home </span> <FaChevronRight size={10} />
                <span>Courses </span> <FaChevronRight size={10} />
                <span className="active">Course Details</span>
            </h1>

            <h1 className="page-main-title">Starting SEO as your Home</h1>
            <div className="course-content">
                <VidSec />
                <MaterialsSec />
                <TopicsMobSec />

                {/* Right Section - Topics & Progress */}
                <div className="right-section">
                    <ProgressBar id={"PCprog"}/>

                    <TopicCom  
                    title={"Week 1 - 4"}
                    para={"Advanced storytelling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "Introduction",
                        twoLi: "Course Overview",
                        threeLi: "Course Overview",
                        qus:"0 QUESTIONS",
                        time:"10 MINUTES",
                        fourLi: "Course Exercise / Reference Files",
                        fiveLi: "Code Editor Installation",
                        sixLi: "Embedding PHP in HTML"
                    }}
                    id={"week14"}
                    />

                    <TopicCom  
                    title={"Week 5 - 8"}
                    para={"Advanced story telling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "Defining Functions",
                        twoLi: "Function Parameters",
                        threeLi: "Course Overview",
                        qus:"0 QUESTIONS",
                        time:"15 MINUTES",
                        fourLi: "Return Values from Functions",
                        fiveLi: "Global Variable and Scope",
                        sixLi: "Constants"
                    }}
                    id={"week58"}
                    />

                    <TopicCom  
                    title={"Week 9 - 12"}
                    para={"Advanced story telling techniques for writers: Personas, Characters & Plots"}
                    ulData={{
                        oneLi: "Defining Functions",
                        twoLi: "Function Parameters",
                        threeLi: "Course Overview",
                        qus:"0 QUESTIONS",
                        time:"15 MINUTES",
                        fourLi: "Return Values from Functions",
                        fiveLi: "Global Variable and Scope",
                        sixLi: "Constants"
                    }}
                    id={"week912"}
                    />

                </div>
                <CommentsSec />
            </div>
        </div>
    );
};

export default CourseDetailPage;

import React, { useState } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import './TopicsMobSec.css'





const TopicsMobSec = () => {
    const [active, setActive] = useState(1);

    return (
        <>
        <div className="TopicsMobSec">
            <div className="course-topics">
            <h5 className="mb-0">Topics for This Course</h5>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "65%" }}></div>
                </div>
                <p>65% Completed</p>
            </div>
            <MDBAccordion active={active} onChange={(itemId) => setActive(itemId)}>
                <MDBAccordionItem collapseId={1} headerTitle='Course Introduction'>
                    <div className="topic-list">
                        <h3>Week 1 - 4</h3>
                        <p className="course-description">
                            Advanced story telling techniques for writers: Personas, Characters & Plots
                        </p>
                        <ul>
                            <li>📖 Introduction</li>
                            <li>📖 Course Overview</li>
                            <li className="course-item">
                                <span className="course-title">Course Overview</span>
                                <div className="course-meta">
                                    <span className="questions">0 QUESTIONS</span>
                                    <span className="time">10 MINUTES</span>
                                </div>
                            </li>
                            <li>📂 Course Exercise / Reference Files</li>
                            <li>💻 Code Editor Installation</li>
                            <li>🖥️ Embedding PHP in HTML</li>
                        </ul>
                    </div>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='JavaScript Language Basics'>
                    <div className="topic-list">
                        <h3>Week 5 - 8</h3>
                        <p className="course-description">
                            Advanced story telling techniques for writers: Personas, Characters & Plots
                        </p>
                        <ul>
                            <li>📖 Defining Functions</li>
                            <li>📖 Function Parameters</li>
                            <li className="course-item">
                                <span className="course-title">Course Overview</span>
                                <div className="course-meta">
                                    <span className="questions">0 QUESTIONS</span>
                                    <span className="time">10 MINUTES</span>
                                </div>
                            </li>
                            <li>✅ Return Values from Functions</li>
                            <li>🌍 Global Variable and Scope</li>
                            <li>🔢 Constants</li>
                        </ul>
                    </div>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Components & Databinding'>
                    <div className="topic-list">
                        <h3>Week 5 - 8</h3>
                        <p className="course-description">
                            Advanced story telling techniques for writers: Personas, Characters & Plots
                        </p>
                        <ul>
                            <li>📖 Defining Functions</li>
                            <li>📖 Function Parameters</li>
                            <li className="course-item">
                                <span className="course-title">Course Overview</span>
                                <div className="course-meta">
                                    <span className="questions">0 QUESTIONS</span>
                                    <span className="time">10 MINUTES</span>
                                </div>
                            </li>
                            <li>✅ Return Values from Functions</li>
                            <li>🌍 Global Variable and Scope</li>
                            <li>🔢 Constants</li>
                        </ul>
                    </div>
                </MDBAccordionItem>
            </MDBAccordion>
        </div>
        </>
    )
}

export default TopicsMobSec
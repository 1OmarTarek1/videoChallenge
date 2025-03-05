import React, { useState } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { ProgressBar, TopicCom } from '../../Components';
import './TopicsMobSec.css'





const TopicsMobSec = () => {
    const [active, setActive] = useState(1);

    return (
        <>
        <div className="TopicsMobSec">
            <ProgressBar id={"MOBprog"} />
            <MDBAccordion active={active} onChange={(itemId) => setActive(itemId)}>
                <MDBAccordionItem collapseId={1} headerTitle='Course Introduction'>
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
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='JavaScript Language Basics'>
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
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Components & Databinding'>
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
                </MDBAccordionItem>
            </MDBAccordion>
        </div>
        </>
    )
}

export default TopicsMobSec
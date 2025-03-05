import { motion } from "framer-motion";

import './ProgressBar.css'




const ProgressBar = ({prog}) => {
    return (
        <div id={prog} className="course-topics w-100">
            <h4 className="progTitle">Topics for This Course</h4>
            <div className="progress-bar">
                <motion.div
                    className="progress"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "63%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>
            </div>
            <p className="mb-0">63% Completed</p>
        </div>
    )
}

export default ProgressBar
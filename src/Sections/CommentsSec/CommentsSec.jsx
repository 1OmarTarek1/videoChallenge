import './CommentsSec.css'



const CommentsSec = () => {
    return (
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
    )
}

export default CommentsSec
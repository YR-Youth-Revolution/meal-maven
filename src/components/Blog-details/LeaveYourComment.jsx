import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogDetails.css';

const LeaveYourComment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);  

    useEffect(() => {
        
        const fetchComments = async () => {
            try {
                const response = await axios.get('https://mealmaven.org/get_comments.php');
                if (response.data.status === 'success') {
                    setComments(response.data.comments);  
                } else {
                    alert('Error fetching comments: ' + response.data.message);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
                alert('An error occurred while fetching comments.');
            }
        };

        fetchComments();
    }, []);  
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'comment') setComment(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, comment };

        try {
            const response = await axios.post('https://mealmaven.org/submit_comment.php', formData, { headers: { 'Content-Type': 'application/json' } });

            if (response.data.status === 'success') {
                alert('Comment submitted successfully!');
                setName(''); setEmail(''); setComment('');
                
                const updatedResponse = await axios.get('https://mealmaven.org/get_comments.php');
                setComments(updatedResponse.data.comments);
            } else {
                alert('Error: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="leave-your-comment-container">
            <h3>Comments</h3>
            
            <div className="comments-list">
            {comments.length > 0 ? (
    comments.map((comment, index) => (
        <div key={index} className="comment">
            <h4>{comment.name}</h4>
            <p>{comment.comment}</p>
           
        </div>
    ))
) : (
    <p>No comments yet. Be the first to comment!</p>
)}

            </div>

            <h3>Leave Your Comment</h3>
            {/* Comment form */}
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        placeholder="Enter your comment"
                        value={comment}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LeaveYourComment;
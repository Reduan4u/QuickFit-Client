"use client"

import React, { useState } from 'react';

const Comment = () => {

    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('Comment submitted:', commentText);
        setCommentText('');
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md p-4 mt-4">
        <h2 className="text-2xl font-bold mb-4">Comment Box</h2>
        <form onSubmit={handleSubmit}>
            <textarea
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Type your comment here..."
                value={commentText}
                onChange={handleCommentChange}
            />
            <div className="mt-2">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit Comment
                </button>
            </div>
        </form>
    </div>
    );
};

export default Comment;
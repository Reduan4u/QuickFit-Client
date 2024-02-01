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

      <div>
     <div className="max-w-md bg-white shadow-md p-4 mt-4 left-1 mb-5">

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


  <div className="max-w-4xl mx-auto grid grid-cols-3 gap-5">

    <div className=' bg-white p-4 rounded-lg shadow mb-4'>
    <div className="flex items-center mb-2">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbodybuilder-lifting-kettlebell-while-crouching-forest-snowy-trail-winter-bodybuilding-winter-sport-fitness_232070-11261.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1656165048.1699715121%26semt%3Dais&w=1920&q=75"
            alt="something"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Sourav</p>
          <p className="text-xs text-gray-500">15, Jan 2024</p>
        </div>
      </div>
      <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores, illum placeat numquam labore ipsa, dignissimos debitis quas culpa iste ut, molestias illo iure sint qui molestiae vero nesciunt reprehenderit.
      </p>

    </div>


    <div className=' bg-white p-4 rounded-lg shadow mb-4'>
    <div className="flex items-center mb-2">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbodybuilder-lifting-kettlebell-while-crouching-forest-snowy-trail-winter-bodybuilding-winter-sport-fitness_232070-11261.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1656165048.1699715121%26semt%3Dais&w=1920&q=75"
            alt="something"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Sourav</p>
          <p className="text-xs text-gray-500">15, Jan 2024</p>
        </div>
      </div>
      <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores, illum placeat numquam labore ipsa, dignissimos debitis quas culpa iste ut, molestias illo iure sint qui molestiae vero nesciunt reprehenderit.
      </p>

    </div>

    
    <div className=' bg-white p-4 rounded-lg shadow mb-4'>
    <div className="flex items-center mb-2">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbodybuilder-lifting-kettlebell-while-crouching-forest-snowy-trail-winter-bodybuilding-winter-sport-fitness_232070-11261.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1656165048.1699715121%26semt%3Dais&w=1920&q=75"
            alt="something"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Sourav</p>
          <p className="text-xs text-gray-500">15, Jan 2024</p>
        </div>
      </div>
      <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores, illum placeat numquam labore ipsa, dignissimos debitis quas culpa iste ut, molestias illo iure sint qui molestiae vero nesciunt reprehenderit.
      </p>

    </div>


    </div>

      </div>


    );
};

export default Comment;
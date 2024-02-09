// components/CommentForm.js
import { useContext, useState } from 'react';

import { AuthContext } from '@/components/Provider/AuthProvider';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const CommentForm = ({ postId }) => {

  const [comment, setComment] = useState('');
  const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext);
    const userEmail = user?.email
    const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(comment);
    console.log(postId);
    try {
      await axiosPublic.post(`/forum/comment/${postId}`, { comment, userEmail, postId });
      // Optionally, you can update the local state or trigger a re-fetch of the post.
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      {/* Add input for user email if needed */}
      {/* <input
        type="text"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Your Email"
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;

// components/CommentForm.js
import { useContext, useState } from 'react';

import { AuthContext } from '@/components/Provider/AuthProvider';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const CommentForm = ({ postId }) => {

  const [comment, setComment] = useState('');
  const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext);
    const userEmail = user?.email
    const userName = user?.displayName
    const userPhoto = user?.photoURL


    const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(comment);
    // console.log(postId);
    // console.log(userName);
    // console.log(userPhoto);
    try {
      await axiosPublic.post(`/forum/comment/${postId}`, { comment, userEmail, postId, userName ,userPhoto })
      .then((data)=>{
        if (data?.data?._id) {
          
          Swal.fire({
            icon: "success",
            title: `Comment Posted!!`,
            text: "Your comment was posted succesfully",
          });

          setComment('')
        }
      })
      
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className='bg-[#f1e9e9] rounded-sm p-2 w-[98%] '
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        rows={5}
        cols={60}
      />
     
     <div className="flex justify-end">
  <button className='bg-one py-1 px-2 rounded-3xl mt-2 mr-4 text-[#fff]' type="submit">Post Comment</button>
</div>
      
    </form>
  );
};

export default CommentForm;

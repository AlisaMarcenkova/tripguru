// App.js
import React, { useState } from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import "../pages/UserComments.css";

const UserComments = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className='page'>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default UserComments;


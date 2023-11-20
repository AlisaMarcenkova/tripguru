// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
};

export default CommentList;

/*
//import STYLING
import Comment from './Comment';
import { useState } from 'react';

export default function CommentBox(props) {
  const [comments, setComments] = useState(props.comments);
  const [commentText, setCommentText] = useState('');



  function handleChange(event) {
    setCommentText(event.target.value);
  }

  // function handleClick() {
  //   setComments(function (prev) {
  //     return [...prev, { user: 'props.username', comment: 'comment' }];
  //   });
  //   setCommentText('');
  // }

  return (
    <div className="commentBox">
      {comments.map((item, index) => (
        <Comment key={'index'} username={'item.username'} comment={'item.comment'} />
      ))}
      <div className="commentInput">
        <button
          style={{ color: commentText ? '#0095F6' : '#b3dffc' }}
          onClick={handleClick}
          className="post-comment-button"
        >
        <input
          value={commentText}
          onChange={handleChange}
          className="INPUT"
          placeholder="COMMENT"
          onKeyDown={(e) => e.key === 'Enter' && commentText && handleClick()}
        />
        </button>
      </div>
    </div>
  );
}
*/
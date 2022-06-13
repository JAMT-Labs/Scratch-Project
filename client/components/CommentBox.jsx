import React from "react";
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Comment from "./Comment";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

import "./styles.css";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"; // Don't want this image, should use default image

const ALL_COM_API = 'http://localhost:8080/api'; // Talk to backend, figure out route that gives us comments. Probably need to pass in event_id to getComments to get relevant comments.

function CommentBox({
  event_id, // Use this event_id to find all associated comments in our DB
}) {

  // State
  const [comList, setComList] = useState([]);

  useEffect(() => {
    getComments(ALL_COM_API);
  }, []);

  const getComments = (API) => {
    console.log('hello? from getComments');
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'this is your data from ALL_COM_API');
        return setComList(data);
      });
  };

  console.log(comList, 'THIS IS MY COMLIST ************************');

  return (
    <div className="container">
      <div className="CommentBox">
        {/* {disList.length > 0 &&
          disList.map((disaster) => <Post key={disaster.id} {...disaster} />)} */}
        {comList.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))}
      </div>
    </div>
  );
}


export default CommentBox;



































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
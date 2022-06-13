//import STYLING
/*
function Comment(props) {
  return (
    <div className="comment">
      <h3 className="comment-user">{}</h3>
      <p className="comment-text">{}</p>
    </div>
  );
}

export default Comment;
*/

import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

import "./styles.css";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"; // Don't want this image, should use default image

function Comment({
  text, // Use this text as placeholder for comment text
  username,
  timestamp,
}) {
  return (
    <div style={{ padding: 14 }} className="Comments">
      <h1>Comments</h1>
      <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{username}</h4>
            {/* Above username is self explantory */}
            <p style={{ textAlign: "left" }}>
              {text}{" "} 
              {/* Above text is comment text */}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {timestamp}
              {/* Above is timestamp (Just a placeholder) */}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default Comment;

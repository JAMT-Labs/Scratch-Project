import React from 'react';
import '../stylesheets/styles.scss';

function Post({
  event_id,
  title,
  description,
  category,
  labels,
  rank,
  start_date,
  end_date,
  country,
  location,
  timezone,
}) {
  //movie -> disaster / movie-info -> disaster info / movie overvie -> disaster overview /
  const setVoteClass = (rank) => {
    if (rank >= 80) return 'red';
    else if (rank >= 50) return 'yellow';
    else return 'green';
  };

  // const setDisPic = (labels) => {
  //   const type = labels.slice(8);
  //   switch() {

  //   }
  // }

  return (
    <div className="disaster">
      <img
        src={
          'https://previews.123rf.com/images/ylivdesign/ylivdesign1608/ylivdesign160800646/60739505-flat-natural-disaster-icons-set-universal-natural-disaster-icons-to-use-for-web-and-mobile-ui-set-of.jpg'
        }
        alt={`${title}`}
      />
      <div className="disaster-info">
        <h3>{`${title}`}</h3>
        <span className={`tag ${setVoteClass(rank)}`}>{`${rank}/100`}</span>
      </div>
      <div className="disaster-overview">
        <h2>Disaster Info</h2>
        <h3>Disaster ID:</h3>
        <p>{event_id}</p>
        <h3>Categories:</h3>
        <p>{labels}</p>
        <h3>Country:</h3>
        <p>{country}</p>
        <h3>TimeZone:</h3>
        <p>{timezone}</p>
        <h3>Location:</h3>
        <p>{location}</p>
        {/* <h3>Description:</h3>
        <p>{description}</p> */}
      </div>
    </div>
  );
}
export default Post;

/*
import { useState } from 'react';
//import STYLING
import CommentBox from './CommentBox';
//import BrokenImg from '../assets/not-found.jpg';

function Post({
  key,
  user,
  username,
  image,
  title,
  comments,
}) {

  return (
    <div className="post">
      <div className="header">
        <img
          className="post-profile-pic"
          src={'userPic'}
          alt={`${'username'}'s profile`}
        />
        <h3 className="post-username">{'username'}</h3>
      </div>
      <div className="post-picture">
        <img
          onDoubleClick={handleLike}
          className="post-picture-img"
          src={imgSrc}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}

          alt={caption}
        />
      </div>
      <div className="post-info">

      </div>
      <div className="post-title">
        <h3>{'username'}</h3> <p>{'title'}</p>
      </div>
      <CommentBox comments={'comments'} username={'User'} />
    </div>
  );
}


export default Post;
*/

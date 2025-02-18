import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profilePic, username, content }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profilePic} alt={username} className="profile-pic" />
        <h3>{username}</h3>
      </div>
      <p className="post-content">{content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
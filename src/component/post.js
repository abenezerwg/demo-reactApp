import React, { useState } from 'react';

// Post component
export const Post = ({ post, onClick }) => (
  <div onClick={onClick} style={{border:'1px solid black', backgroundColor:'grey'}}>
    <p>{post.id}</p>
    <p>{post.title}</p>
    <p>{post.author}</p>
  </div>
);

// Posts component
export const Posts = ({ posts, onPostClick }) => (
  <div>
    {posts.map((post, index) => (
      <Post key={index} post={post} onClick={() => onPostClick(index)} />
    ))}
  </div>
);


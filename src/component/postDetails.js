import React from "react";

export const PostDetails = ({ post, onDelete }) => (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <button>Edit</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
);
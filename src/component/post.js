import React, { useContext } from 'react';
import SelectedPostIdContext from '../component/SelectedPostIdContext';

// Post component
export const Post = ({ post }) => {
    const selectedPostId = useContext(SelectedPostIdContext);

    return (
        <div onClick={() => selectedPostId(post.id)} style={{border:'1px solid black', backgroundColor:'grey'}}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
        </div>
    );
};

// Posts component
export const Posts = ({ posts }) => (
    <div>
        {posts.map((post, index) => (
            <Post key={index} post={post} />
        ))}
    </div>
);
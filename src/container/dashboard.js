import React, {useEffect, useState} from 'react';
import { Posts } from '../component/post';
import { PostDetails } from '../component/postDetails';


export const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [title, setTitle] = useState('Title: ');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:8080/posts');
        const data = await response.json();
        setPosts(data);
    };

    const handlePostClick = (index) => {
        setSelectedPost(posts[index]);
    };

    const handleTitleChange = () => {
        const updatedPosts = [...posts];
        updatedPosts[0].title = title;
        setPosts(updatedPosts);
    };

    return (
        <div style={{display:"grid", gridTemplateColumns: '1fr', margin: '20px', backgroundColor: '#f5f5f5'}}>
            <Posts posts={posts} onPostClick={handlePostClick} />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleTitleChange}>Update Title</button>
            {selectedPost && <PostDetails post={selectedPost} />}
        </div>
    );
};
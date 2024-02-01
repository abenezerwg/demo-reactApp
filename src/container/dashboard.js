import React, {useEffect, useState, useRef} from 'react';
import { Posts } from '../component/post';
import { PostDetails } from '../component/postDetails';
import SelectedPostIdContext from '../component/SelectedPostIdContext';
import { AddPost } from '../component/AddPost';
export const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const titleRef = useRef();
    const authorRef = useRef();

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:8080/posts');
        const data = await response.json();
        setPosts(data);
    };

    const handlePostClick = (index) => {
        setSelectedPost(posts[index]);
    };
    const deletePost = async (id) => {
        await fetch(`http://localhost:8080/posts/${id}`, { method: 'DELETE' });
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleTitleChange = () => {
        const updatedPosts = [...posts];
        updatedPosts[0].title = titleRef.current.value;
        setPosts(updatedPosts);
    };

    return (
        <SelectedPostIdContext.Provider value={handlePostClick} >
            <div style={{display:"grid", gridTemplateColumns: '1fr', margin: '20px', backgroundColor: '#f5f5f5'}}>
                <AddPost onAdd={addPost} />
                <Posts posts={posts} />
                <input ref={titleRef} type="text" name="title" />
                <input ref={authorRef} type="text" name="author" />
                <button onClick={handleTitleChange}>Update Title</button>
                {selectedPost && <PostDetails post={selectedPost} onDelete={deletePost} />}
            </div>
        </SelectedPostIdContext.Provider>
    );
};
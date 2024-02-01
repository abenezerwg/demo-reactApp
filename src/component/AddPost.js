import React, { useRef } from 'react';

export const AddPost = ({ onAdd }) => {
    const titleRef = useRef();
    const authorRef = useRef();
    const contentRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            content: contentRef.current.value,
        };
        await fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost),
        });
        onAdd(newPost);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={titleRef} type="text" name="title" placeholder="Title" required />
            <input ref={authorRef} type="text" name="author" placeholder="Author" required />
            <textarea ref={contentRef} name="content" placeholder="Content" required />
            <button type="submit">Add Post</button>
        </form>
    );
};

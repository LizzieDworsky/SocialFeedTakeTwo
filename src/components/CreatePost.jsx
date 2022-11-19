import React from "react";
import { useState } from "react";

const CreatePost = ({ posts, setPosts }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleCreate(event) {
        event.preventDefault();
        let tempPost = {
            id: posts.length + 1,
            name: name,
            message: message,
        };
        createPost(tempPost);
    }

    function createPost(tempPost) {
        let tempEntries = [...posts, tempPost];
        setPosts(tempEntries);
    }

    return (
        <form onSubmit={(event) => handleCreate(event)}>
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label>Message</label>
            <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePost;

import React from "react";
import { useState } from "react";

const CreatePost = ({ posts }) => {
    const [newPost, setNewPost] = useState({});
    const [name, setName] = useState("Name Goes here");
    const [body, setBody] = useState("Body goes here");

    function handleCreate(event) {
        event.preventDefault();
        let tempPost = {};
        setNewPost(tempPost);
    }

    return (
        <form onSubmit={(event) => handleCreate(event)}>
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label>Body</label>
            <input
                type="text"
                value={body}
                onChange={(event) => setBody(event.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePost;

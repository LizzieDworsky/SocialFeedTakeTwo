import React from "react";
import Post from "./Post";

const DisplayPosts = ({ posts }) => {
    return (
        <ul>
            {posts.map((item) => (
                <li key={item.id}>
                    <Post />
                </li>
            ))}
        </ul>
    );
};

export default DisplayPosts;

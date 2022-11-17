import React from "react";

const Post = ({ post }) => {
    return (
        <div>
            <p>{post.name}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;

import React from "react";

const Post = ({ post }) => {
    return (
        <div>
            <p>{post.name}</p>
            <p>{post.message}</p>
        </div>
    );
};

export default Post;

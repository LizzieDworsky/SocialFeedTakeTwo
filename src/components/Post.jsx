import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import React from "react";

const Post = ({ post }) => {
    return (
        <div>
            <p>{post.name}</p>
            <p>{post.message}</p>
            {post.isLiked ? (
                <FaThumbsUp className="like-dislike-svg thumb-up" />
            ) : (
                <FaThumbsUp className="like-dislike-svg" />
            )}
            {post.isDisliked ? (
                <FaThumbsDown className="like-dislike-svg thumb-down" />
            ) : (
                <FaThumbsDown className="like-dislike-svg" />
            )}
            {/* add conditional based on True/False change classname to reflect if clicked--liked/disliked */}
        </div>
    );
};

export default Post;

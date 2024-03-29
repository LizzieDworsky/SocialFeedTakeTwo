import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import React from "react";
import { useState } from "react";

const Post = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    function handleDislikeClick() {
        setIsDisliked(!isDisliked);
        setIsLiked(false);
    }

    function handleLikeClick() {
        setIsLiked(!isLiked);
        setIsDisliked(false);
    }

    return (
        <div>
            <p>{post.date}</p>
            <p>{post.name}</p>
            <p>{post.message}</p>

            <FaThumbsUp
                className={
                    isLiked ? "like-dislike-svg thumb-up" : "like-dislike-svg"
                }
                onClick={(event) => handleLikeClick(event)}
            />

            <FaThumbsDown
                className={
                    isDisliked
                        ? "like-dislike-svg thumb-down"
                        : "like-dislike-svg"
                }
                onClick={(event) => handleDislikeClick(event)}
            />
        </div>
    );
};

export default Post;

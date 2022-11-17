import { useState } from "react";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import NavBar from "./components/NavBar";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "Amy Dworsky",
            body: "I love the 49ers!",
            isLiked: false,
            isDisliked: false,
        },
    ]);

    return (
        <div>
            <NavBar />
            <CreatePost />
            <DisplayPosts posts={posts} />
        </div>
    );
}

export default App;

import { useState } from "react";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import NavBar from "./components/NavBar";

function App() {
    const [posts, setPosts] = useState({
        name: "Amy Dworsky",
        body: "I love the 49ers!",
        isLiked: false,
        isDisliked: false,
    });

    return (
        <div>
            <NavBar />
            <CreatePost />
            <DisplayPosts />
        </div>
    );
}

export default App;

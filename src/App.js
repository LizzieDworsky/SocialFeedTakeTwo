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
        {
            id: 2,
            name: "Josh Dworsky",
            body: "Go Niners Go!",
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 3,
            name: "Mike Terrill",
            body: "Go Packers!",
            isLiked: false,
            isDisliked: false,
        },
    ]);

    return (
        <div>
            <NavBar />
            <CreatePost setPosts={setPosts} />
            <DisplayPosts posts={posts} />
        </div>
    );
}

export default App;

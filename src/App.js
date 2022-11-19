import { useState } from "react";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import NavBar from "./components/NavBar";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "Amy Dworsky",
            message: "I love the 49ers!",
        },
        {
            id: 2,
            name: "Josh Dworsky",
            message: "Go Niners Go!",
        },
        {
            id: 3,
            name: "Mike Terrill",
            message: "Go Packers!",
        },
    ]);

    return (
        <div>
            <NavBar />
            <CreatePost posts={posts} setPosts={setPosts} />
            <DisplayPosts posts={posts} />
        </div>
    );
}

export default App;

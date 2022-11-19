import { useState } from "react";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import NavBar from "./components/NavBar";

function App() {
    const date = Date();
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "Amy Dworsky",
            message: "I love the 49ers!",
            date: date,
        },
        {
            id: 2,
            name: "Josh Dworsky",
            message: "Go Niners Go!",
            date: date,
        },
        {
            id: 3,
            name: "Mike Terrill",
            message: "Go Packers!",
            date: date,
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

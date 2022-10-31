import { useState } from "react";
import DisplayPosts from "./components/DisplayPosts";

function App() {
    const [posts, setPosts] = useState({
        name: "Amy Dworsky",
        body: "I love the 49ers!",
        isLiked: false,
        isDisliked: false,
    });

    return (
        <div>
            <h1>Hello World</h1>
            <DisplayPosts />
        </div>
    );
}

export default App;

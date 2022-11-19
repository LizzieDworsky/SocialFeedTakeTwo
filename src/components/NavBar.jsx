import React from "react";

const NavBar = (props) => {
    const date = Date();
    return (
        <ul>
            <li>Social Feed</li>
            <li>{date}</li>
        </ul>
    );
};

export default NavBar;

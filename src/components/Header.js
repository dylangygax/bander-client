import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to={"/Home"}>Your budding music</Link>
            </div>
            <div className="links">
                <ul>
                    <li><Link to={"/Matches"}>who you're vibing with</Link></li>
                    <li><Link to={"/Search"}>who we lookin for?</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
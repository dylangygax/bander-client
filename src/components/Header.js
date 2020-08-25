import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to={"/app/Home"}>Your budding music</Link>
            </div>
            <div className="links">
                <ul>
                    <li><Link to={"/app/Matches"}>who you're vibing with</Link></li>
                    <li><Link to={"/app/Search"}>who we lookin for?</Link></li>
                    <li><Link to={"/app/Show"}>SHOW ME MY MATCH</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
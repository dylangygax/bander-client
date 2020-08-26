import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to={"/app/Home"}>Your budding music</Link>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to={"/app/Matches"}>
                            <FontAwesomeIcon icon={faCoffee} />
                        </Link>
                    </li>
                    <li><Link to={"/app/Search"}>who we lookin for?</Link></li>
                    <li><Link to={"/app/Show"}>SHOW ME MY MATCH</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
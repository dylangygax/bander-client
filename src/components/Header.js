import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faMusic, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className="header  fixed-top p-2">
            <div className="links d-flex justify-content-around p-1">
                <Link className="header-font  " to={"/app/Home"}>
                    <FontAwesomeIcon icon={faMusic} />
                </Link>
                <Link className="header-font " to={"/app/Settings"}>
                    <FontAwesomeIcon icon={faCog} />
                </Link>
                <Link className="header-font " to={"/app/Search"}>
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link className="header-font " to={"/app/Matches"}>
                    <FontAwesomeIcon icon={faPeopleArrows} />
                </Link>
            </div>
        </nav>
    );
}

export default Header;
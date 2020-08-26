import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faComment } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <nav className="footer  fixed-bottom p-2">
            <div className="links d-flex justify-content-around p-1">
                <Link className="footer-font " to={"/app/Search"}>
                    <FontAwesomeIcon icon={faTimes} />
                </Link>
                <Link className="footer-font " to={"/app/GeneralMessages"}>
                    <FontAwesomeIcon icon={faComment} />
                </Link>
                <Link className="footer-font  " to={"/app/Home"}>
                    <FontAwesomeIcon icon={faCheck} />
                </Link>
            </div>
        </nav>
    );
}

export default Footer;
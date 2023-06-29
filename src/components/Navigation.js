import React from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgGym } from "react-icons/cg";

function Navigation() {
    return (
        <div className="NavBar">
            <nav>
                <ul className="LinksList">
                    <li>
                        <Link to="/"><BiHome/>Home</Link>
                    </li>
                    <li>
                        <Link to="/create-exercise"><CgGym />Add New Exercise</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
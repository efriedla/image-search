import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="Navbar-style">
            <div className="Nav-left">
                <ul>
                    <li>links</li>
                    <li>links</li>
                    <li>links</li>
                   
                </ul>
            </div>
            <div className="Nav-center">
                <div>logo</div>
            </div>
            <div className="Nav-right">
                <div className="search">search</div>
            </div>
        </div>
    );
};
export default Navbar;
import React from 'react';
// import NavLink from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar-div">
            <div className="navbar-div__left-group">
                <button className="logo-button">Logo Goes Here</button>
                <button className="nav-bar-button">Techniques</button>
                <button className="nav-bar-button">Benefits</button>
                <button className="nav-bar-button">FAQ</button>
                <button className="nav-bar-button">Blog</button>
                <button className="giftcard-button">🎁 Buy a Gift Card</button>
            </div>
            <div className="navbar-div__right-group">
                <button className="nav-bar-button">Sign In</button>
                <button className="nav-bar-button">Create Account</button>
                <button className="professionals-button">Professionals</button>
            </div>
        </div>
    )
}

export default NavBar;
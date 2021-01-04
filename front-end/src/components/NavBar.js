import React from 'react';
// import NavLink from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar-div">
            <div className="navbar-div__left-group">
                <a className="navbar_anchor_button" href="/"><button className="logo-button">Logo Goes Here</button></a>
                <button className="nav-bar-button">Techniques</button>
                <button className="nav-bar-button">Benefits</button>
                <button className="nav-bar-button">FAQ</button>
                <button className="nav-bar-button">Blog</button>
                <button className="giftcard-button">🎁 Buy a Gift Card</button>
            </div>
            <div className="navbar-div__right-group">
                <button className="nav-bar-button">Sign In</button>
                <a className="navbar_anchor_button" href="/login/register"><button className="nav-bar-button">Create Account</button></a>
                <button className="professionals-button">Professionals</button>
            </div>
        </div>
    )
}

export default NavBar;
import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="header-options">
        <div className="menu-buttons">
          <nav>
            <ul className="menu-links">
                <a className="btn-txt" href="/About">About</a>
                <a className="btn-txt" href="/Recipes">Recipes</a>
                <a className="btn-txt" href="/NewsLetter">NewsLetter</a>
                <a className="bli-text btn-txt" href="/Home">Blizzards</a>
                <a className="btn-txt" href="/Coupons">Coupons</a>
                <a className="btn-txt" href="/Contact">Contact</a>
                <a className="btn-txt" href="/Register">Register</a>
                <a className="btn-txt" href="/Login">LogIn</a>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;


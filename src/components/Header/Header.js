import React from 'react'
import './Header.css';

const Header = () => {
    const socialMediaLinks=['Facebook','Pinterest','Behance','flicker','Instagram','Twitter','Linkedin']
    return (
        <header className="Header">
            <nav className="HeaderMenu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </nav>
            <div className="SocialMediaIcons">
                <ul>
                <li>
                    {socialMediaLinks.map(icon=>
                    <img src={require(`../../assests/icons/Solid_social_media/${icon}.png`)} alt="Search" key={icon}  /> 
                    )}
                 </li>
                </ul>
               
            </div>
        </header>
    )
}

export default Header;


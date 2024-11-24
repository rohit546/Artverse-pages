import React from 'react';
import '../styles/Service_Page_Header.css';
import Logo from '../assets/images/ArtVerse_Logo.png'; // Correct path to your logo
import SearchIcon from '../assets/images/search.png'; // Correct path to your search icon
import ShoppingIcon from '../assets/images/shopping.png'; // Correct path to your shopping icon
import LikeIcon from '../assets/images/heart.png'; // Correct path to your like icon
import ProfileIcon from '../assets/images/profile.png'; // Correct path to your profile icon
import '../styles/Header.css'; // Ensure to import your custom CSS

function Service_Page_Header() {
  return (
    <div>

<header className="header">
      <a href="/" className="logo-link">
        <img src={Logo} alt="ArtVerse Logo" className="logo" />
      </a>
      <h2>Edit Profile</h2>
      <a href="/profile" className="icon-link">
        <img src={ProfileIcon} alt="Profile Icon" className="profile-icon" />
      </a>
    </header>


     {/* New Row of Headings */}
     <div className="sub-headings">
       
        
      </div>

      
    </div>
  )
}

export default Service_Page_Header;

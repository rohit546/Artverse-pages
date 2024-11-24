import React from 'react';
import '../styles/ArtistDetails.css';
import ArtistImage from '../assets/images/Artist_Image.png';
import VerifiedIcon from '../assets/images/verified_icon.png';

function ArtistDetails() {
  return (
    <div>
      <div className="profile-container">
        {/* Profile Image */}
        <img src={ArtistImage} alt="Rohit Kumar" className="profile-image" />

        {/* Profile Content */}
        <div className="profile-content">
          {/* Name */}
          <h3 className="profile-name">Rohit Kumar</h3>

          {/* Location */}
          <p className="profile-location">Islamabad, Pakistan</p>
          <p className="profile-location">Verified</p>
          <p className="profile-location">42 Followers | 9 Artworks</p>

          {/* Verification and Action Buttons */}
          <div className="button-container">
            <button className="button">Edit</button>
          </div>

          {/* Description */}
          <h1 className='Aboutheading'>About Artist</h1>
          <p className="profile-description">
            Rohit Kumar is an artist who creates from a place of passion and observation. Known for blending intricate details with bold abstract elements, Rohit's work tells a story of personal memories and reflections. Each piece is a journey through patterns, textures, and expressive mark-making, offering a unique perspective on the world through their eyes.
          </p>
        </div>
      </div>

      {/* Academics Section */}
      <div className="academics-container">
        <h2 className="section-heading">Academics</h2>
        <div className="academic-item">
          <p>Bachelors</p>
          <p>Fine Arts</p>
          <p>Fast University Faisalabad Campus</p>
          <p>2012 - 2016</p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="awards-container">
        <h2 className="section-heading">Awards & Certificates</h2>
        <div className="award-item">
          <span className="award-title">NFC Award</span> <span>2012</span>
        </div>
        <p>
          Awarded with NFC Award in 2012 for social paintings showing
          contributions to civic society and its betterment.
        </p>
      </div>


 {/* Reviews Section */}
 <div className="reviews-container">
        <h2 className="section-heading">Reviews & Rating</h2>
        <div className="overall-rating">Overall Rating 8.7</div>
        <div className="review-item">
          <h3>Rohit Kumar</h3> <span className="review-rating">7</span>
          <p>Awarded for contributing to social power in civic society.</p>
        </div>
        <div className="review-item">
          <h3>Ahsan Asim</h3> <span className="review-rating">9</span>
          <p>Awarded for social paintings showing impact in the community.</p>
        </div>
        <div className="review-item">
          <h3>Wajeeha</h3> <span className="review-rating">8</span>
          <p>Recognized for promoting community betterment through art.</p>
        </div>
      </div>

    </div>
  );
}

export default ArtistDetails;

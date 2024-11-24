import React from 'react';
import '../styles/ArtistDetails.css';
import ArtistImage from '../assets/images/Artist_Image.png';
import VerifiedIcon from '../assets/images/verified_icon.png';

import '../styles/ArtistDetailsForUser.css'; // Ensure to import your custom CSS

import LikeIcon from '../assets/images/like_icon.png';
import ShoppingIcon from '../assets/images/shopping_icon.png';

function ArtistDetailsForUser() {
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
            <button className="button">Follow</button>
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
      <div>
      <h1 className='main-headin3'><b>Explore inspiring designs</b></h1>





      <div className="art-cards-container">
      {/* First Card */}
      <div className="art-card">
        <div className="card-image" style={{ backgroundImage: `url(${require('../assets/images/home9.png')})` }}></div>
        <div className="card-details">
          <div className="left-details">
            <h3 className="art-title">Flowery</h3>
            <p className="artist-name">By Asif Hussain</p>
            <p className="art-type">Painting</p>
            <p className="art-material">Oil, Acrylic on Canvas</p>
            <p className="dimensions">72 x 52 Inches</p>
          </div>
          <div className="right-details">
            <p className="price-old">Rs. 80,000</p>
            <p className="price-new">Rs. 71,000</p>
            <p className="discount">30% OFF</p>
          </div>
        </div>
        <div className="card-buttons">
          <button className="icon-container">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container">
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="art-card">
        <div className="card-image" style={{ backgroundImage: `url(${require('../assets/images/home10.png')})` }}></div>
        <div className="card-details">
          <div className="left-details">
            <h3 className="art-title">Colour Paintings</h3>
            <p className="artist-name">By Artist Name</p>
            <p className="art-type">Artist Spotlights</p>
            <p className="art-material">Oil, Acrylic on Canvas</p>

            <p className="dimensions">60 x 40 Inches</p>
          </div>
          <div className="right-details">
            <p className="price-old">Rs. 90,000</p>
            <p className="price-new">Rs. 81,000</p>
            <p className="discount">10% OFF</p>
          </div>
        </div>
        <div className="card-buttons">
          <button className="icon-container">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container">
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="art-card">
        <div className="card-image" style={{ backgroundImage: `url(${require('../assets/images/home11.png')})` }}></div>
        <div className="card-details">
          <div className="left-details">
            <h3 className="art-title">Asian Mysticism</h3>
            <p className="artist-name">By Artist Name</p>
            <p className="art-type">Englo Art</p>
            <p className="art-material">Acrylic on Canvas</p>
            <p className="dimensions">50 x 70 Inches</p>
          </div>
          <div className="right-details">
            <p className="price-old">Rs. 100,000</p>
            <p className="price-new">Rs. 90,000</p>
            <p className="discount">15% OFF</p>
          </div>
        </div>
        <div className="card-buttons">
          <button className="icon-container">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container">
            <img src={ShoppingIcon} alt="Shopping" />
          </button>
        </div>
      </div>
    </div>




    <div className="art-cards-container1">
      {/* First Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home9.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Flowery</h3>
            <p className="artist-name1">By Asif Hussain</p>
            <p className="art-type1">Painting</p>
            <p className="art-material1">Oil, Acrylic on Canvas</p>
            <p className="dimensions1">72 x 52 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 80,000</p>
            <p className="price-new1">Rs. 71,000</p>
            <p className="discount1">30% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home10.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Colour Paintings</h3>
            <p className="artist-name1">By Artist Name</p>
            <p className="art-type1">Artist Spotlights</p>
            <p className="art-material1">Oil, Acrylic on Canvas</p>

            <p className="dimensions1">60 x 40 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 90,000</p>
            <p className="price-new1">Rs. 81,000</p>
            <p className="discount1">10% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home11.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Asian Mysticism</h3>
            <p className="artist-name1">By Artist Name</p>
            <p className="art-type1">Englo Art</p>
            <p className="art-material1">Acrylic on Canvas</p>
            <p className="dimensions1">50 x 70 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 100,000</p>
            <p className="price-new1">Rs. 90,000</p>
            <p className="discount1">15% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like1" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>
    </div>



    <div className="art-cards-container2">
      {/* First Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home9.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Flowery</h3>
            <p className="artist-name1">By Asif Hussain</p>
            <p className="art-type1">Painting</p>
            <p className="art-material1">Oil, Acrylic on Canvas</p>
            <p className="dimensions1">72 x 52 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 80,000</p>
            <p className="price-new1">Rs. 71,000</p>
            <p className="discount1">30% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home10.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Colour Paintings</h3>
            <p className="artist-name1">By Artist Name</p>
            <p className="art-type1">Artist Spotlights</p>
            <p className="art-material1">Oil, Acrylic on Canvas</p>

            <p className="dimensions1">60 x 40 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 90,000</p>
            <p className="price-new1">Rs. 81,000</p>
            <p className="discount1">10% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="art-card1">
        <div className="card-image1" style={{ backgroundImage: `url(${require('../assets/images/home11.png')})` }}></div>
        <div className="card-details1">
          <div className="left-details1">
            <h3 className="art-title1">Asian Mysticism</h3>
            <p className="artist-name1">By Artist Name</p>
            <p className="art-type1">Englo Art</p>
            <p className="art-material1">Acrylic on Canvas</p>
            <p className="dimensions1">50 x 70 Inches</p>
          </div>
          <div className="right-details1">
            <p className="price-old1">Rs. 100,000</p>
            <p className="price-new1">Rs. 90,000</p>
            <p className="discount1">15% OFF</p>
          </div>
        </div>
        <div className="card-buttons1">
          <button className="icon-container1">
            <img src={LikeIcon} alt="Like1" />
          </button>
          <button className="icon-container1">
            <img src={ShoppingIcon} alt="Shopping1" />
          </button>
        </div>
      </div>
    </div>
    </div>


    </div>
    
  );
}

export default ArtistDetailsForUser;

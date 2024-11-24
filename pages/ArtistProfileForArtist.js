import React from 'react';
import '../styles/HomePage.css'; // Ensure to import your custom CSS
import '../styles/ArtistProfileForArtist.css'; // Ensure to import your custom CSS
import Home_Page_Header from '../components/Home_Page_Header';

import Home_Page_Footer from '../components/Home_Page_Footer';
import ArtistDetails from '../components/ArtistDetails';


function ArtistProfileForArtist() {
  return (
    <div className='ArtistProfileForArtist'>
      <Home_Page_Header />
      <ArtistDetails/>
      
     
      
    </div>
  )
}

export default ArtistProfileForArtist;

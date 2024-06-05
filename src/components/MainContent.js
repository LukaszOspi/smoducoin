import React from 'react';
import duckImage from './../assets/duck_smoking_gif.jpg'; // Ensure this path is correct
import "./../styles.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <img src={duckImage} alt="Smoking Duck" className="main-image" />
      <h2 className="main-title">DUCK</h2>
      <p className="main-description">The biggest community meme coin on Solana</p>
      <p className="sub-description">
        ETH has Pepe, AVAX has Landwolf and SOL has Duck.
      </p>
    </main>
  );
}

export default MainContent;

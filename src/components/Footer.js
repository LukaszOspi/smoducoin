import React from 'react';
import "./../styles.css";
import telegramIcon from './../assets/telegram.png'; // Import the image

const Footer = () => {
  return (
    <footer className="footer">
      <p>Join the Duck community today!</p>
      <a href="https://t.me/smoducoin" target="_blank" rel="noopener noreferrer">
        <img src={telegramIcon} alt="Telegram" className="footer-icon" />
      </a>
    </footer>
  );
}

export default Footer;

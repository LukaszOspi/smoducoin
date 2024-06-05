const Header = () => {
    return (
      <header className="header">
        <div className="marquee">
          <span>LOOKIN' GOOD DUCK </span>
          <span>LOOKIN' GOOD DUCK </span>
        </div>
        <div className="language-selector">
          <select>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>
      </header>
    );
  }
  
  export default Header;
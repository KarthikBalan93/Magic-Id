import React from 'react';
import Profile from '../components/Profile';

const Header = () => {
  const profileIcon = 'profile-icon.png'; // Replace with the path to your profile icon image
  const userName = 'Jane Wilson'; // Replace with the user's name

  return (
    <div className="header">
      <Profile name={userName} profileIcon={profileIcon} />
    </div>
  );
};

export default Header;

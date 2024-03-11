// ProfileCard.js

import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>Profile Information</h2>
      <div className="profile-details">
        <p>Name: "exemple"</p>
        <p>Email: "exemple"</p>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default ProfileCard;

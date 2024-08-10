// src/components/ProfileSidebar/ProfileSidebar.jsx
import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ profile }) => {
  return (
    <div className="profile-sidebar">
      <div className="profile-info">
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h2>{profile.name}</h2>
        <p>{profile.degree}</p>
        <p>@ {profile.institution}</p>
        <p>Last updated {profile.lastUpdated}</p>
      </div>
      <button className="complete-profile-btn">Complete profile</button>
      <div className="profile-performance">
        <h3>Profile performance</h3>
        <p>Search appearances: {profile.searchAppearances}</p>
        <p>Recruiter actions: {profile.recruiterActions}</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">My home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Companies</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;

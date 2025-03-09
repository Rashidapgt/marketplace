// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getUserProfile();
      setUser(response.data);
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as necessary */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;

import React from "react";
import "../../styles/User/UserProfile.css";

const UserProfile = () => {
  const user = {
    name: "Nimisha S Mani",
    email: "nimisha@example.com",
    phone: "+91 9876543210",
    role: "User",
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
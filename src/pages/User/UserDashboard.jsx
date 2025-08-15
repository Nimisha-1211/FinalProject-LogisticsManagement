import React from "react";
import "../../styles/User/UserDashboard.css"

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-section">
        <h3>Welcome Back, Nimisha!</h3>
        <p>Here you can manage your profile, address, and view recent activity.</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">Profile Overview</div>
        <div className="card">Address Book</div>
        <div className="card">Recent Shipments</div>
      </div>
    </div>
  );
};

export default UserDashboard;
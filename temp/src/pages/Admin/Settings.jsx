import React, { useState } from 'react';
import '../../styles/Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Enable Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleToggleNotifications}
        />
      </div>
    </div>
  );
};

export default Settings;
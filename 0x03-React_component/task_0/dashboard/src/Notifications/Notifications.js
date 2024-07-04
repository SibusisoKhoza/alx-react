import React from "react";
import "./Notifications.css";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer }) {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && (<div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
          />
        </ul>
        <button
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Close"
          onClick={handleCloseClick}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>)}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
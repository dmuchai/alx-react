import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

const Notifications = ({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
  setNotificationFilter,
}) => {
  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)}>
          <button
            aria-label="Close"
            onClick={handleHideDrawer}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            ❌
          </button>
          <p>Here is the list of notifications</p>
          <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
          <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={markNotificationAsRead}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
  })),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    cursor: 'pointer',
  },
  notifications: {
    border: '2px dashed red',
    padding: '1rem',
    position: 'relative',
    marginTop: '1rem',
  },
});

export default Notifications;

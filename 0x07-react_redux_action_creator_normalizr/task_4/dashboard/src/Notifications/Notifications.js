import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead, handleHideDrawer } = this.props;

    return (
      <div className="Notifications">
        <button aria-label="Close" onClick={handleHideDrawer}>Close</button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.map(({ id, type, value }) => (
            <NotificationItem
              key={id}
              type={type}
              value={value}
              markAsRead={() => markNotificationAsRead(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

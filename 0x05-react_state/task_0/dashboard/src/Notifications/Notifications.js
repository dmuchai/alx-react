import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;

    return (
      <div className={css(styles.wrapper)}>
        <div
          className={css(styles.menuItem)}
          data-testid="menu-item"
          onClick={this.handleDisplayDrawer}
        >
          Your notifications
        </div>

        {displayDrawer && (
          <div
            className={css(styles.notifications)}
            data-testid="notifications-drawer"
          >
            <button
              aria-label="Close"
              onClick={this.handleHideDrawer}
              data-testid="close-button"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <img
                src="https://raw.githubusercontent.com/holbertonschool/0x05-React_state/master/task_0/dashboard/src/assets/close-icon.png"
                alt="close icon"
                width="10px"
              />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    type={item.type}
                    value={item.value}
                    html={item.html}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  menuItem: {
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
  },
  notifications: {
    border: '2px dashed red',
    padding: '10px',
    position: 'absolute',
    top: '20px',
    right: '0',
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default Notifications;

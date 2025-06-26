import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { fetchNotifications } from "../actions/notificationActionCreators";
import { setNotificationFilter } from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

export class Notifications extends React.Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      setNotificationFilter,
    } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                position: "absolute",
                right: "1rem",
                top: "1rem",
                background: "none",
                border: "none",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <button onClick={() => setNotificationFilter("URGENT")}>‼️</button>
            <button onClick={() => setNotificationFilter("DEFAULT")}>💠</button>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                listNotifications.map((notif) => (
                  <NotificationItem key={notif.id} {...notif} />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed red",
    padding: "1rem",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
  menuItem: {
    textAlign: "right",
    cursor: "pointer",
  },
});

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

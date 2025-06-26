import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from '../actions/uiActionCreators';
import { setNotificationFilter, fetchNotifications } from '../actions/notificationActionCreators';
import { markAsRead } from '../actions/notificationActionTypes';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = ({
  displayDrawer,
  listNotifications,
  displayNotificationDrawer,
  hideNotificationDrawer,
  markNotificationAsRead,
  setNotificationFilter,
  fetchNotifications,
}) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      displayDrawer={displayDrawer}
      listNotifications={listNotifications}
      handleDisplayDrawer={displayNotificationDrawer}
      handleHideDrawer={hideNotificationDrawer}
      markNotificationAsRead={markNotificationAsRead}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  displayDrawer: state.getIn(['ui', 'isNotificationDrawerVisible']),
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  markNotificationAsRead: markAsRead,
  setNotificationFilter,
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NotificationsContainer from './NotificationsContainer';
import { Provider } from 'react-redux';
import * as actions from '../actions/notificationActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../actions/notificationActionCreators', () => ({
  ...jest.requireActual('../actions/notificationActionCreators'),
  fetchNotifications: jest.fn(() => ({ type: 'FETCH_NOTIFICATIONS' })),
}));

describe('NotificationsContainer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ui: {
        isNotificationDrawerVisible: false,
      },
      notifications: {
        filter: 'DEFAULT',
        notifications: {},
        loading: false,
      },
    });
  });

  it('calls fetchNotifications on mount', () => {
    shallow(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );
    expect(actions.fetchNotifications).toHaveBeenCalled();
  });
});

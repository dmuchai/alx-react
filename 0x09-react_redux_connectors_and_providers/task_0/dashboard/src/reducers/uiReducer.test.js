import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

const defaultState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

describe('uiReducer with Immutable.js', () => {
  it('should return initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(defaultState.toJS());
  });

  it('should return initial state when irrelevant action is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(defaultState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...defaultState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const prevState = defaultState.set('isNotificationDrawerVisible', true);
    const state = uiReducer(prevState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...defaultState.toJS(),
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.toJS()).toEqual({
      ...defaultState.toJS(),
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const prevState = defaultState.set('isUserLoggedIn', true);
    const state = uiReducer(prevState, { type: LOGIN_FAILURE });
    expect(state.toJS()).toEqual({
      ...defaultState.toJS(),
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const prevState = defaultState.set('isUserLoggedIn', true);
    const state = uiReducer(prevState, { type: LOGOUT });
    expect(state.toJS()).toEqual({
      ...defaultState.toJS(),
      isUserLoggedIn: false,
    });
  });
});

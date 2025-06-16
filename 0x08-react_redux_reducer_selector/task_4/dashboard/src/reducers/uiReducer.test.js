import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer with Immutable.js', () => {
  it('should return initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return initial state when irrelevant action is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(initialState.set('isNotificationDrawerVisible', true), {
      type: HIDE_NOTIFICATION_DRAWER,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const state = uiReducer(initialState.set('isUserLoggedIn', true), {
      type: LOGIN_FAILURE,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const state = uiReducer(initialState.set('isUserLoggedIn', true), {
      type: LOGOUT,
    });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });
});

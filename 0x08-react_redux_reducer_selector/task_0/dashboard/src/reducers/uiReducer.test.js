import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE, // Not handled, used to test default case
} from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  it('should return initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return initial state when irrelevant action (SELECT_COURSE) is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const startingState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(startingState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const startingState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(startingState, { type: LOGIN_FAILURE });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const startingState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(startingState, { type: LOGOUT });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });
});

import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("mapStateToProps returns the correct object when user is logged in", () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({
      isLoggedIn: true,
      displayDrawer: false,
    });
  });

  it("mapStateToProps returns the correct object when drawer is visible", () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({
      isLoggedIn: false,
      displayDrawer: true,
    });
  });

  it("mapStateToProps returns the correct object when both are true", () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({
      isLoggedIn: true,
      displayDrawer: true,
    });
  });
});

import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";
import uiReducer from "./uiReducer";
import { Map } from "immutable";

export const initialState = {
  courses: Map(),
  notifications: Map(),
  ui: Map(),
};

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;

import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ConnectedCourseList, { CourseList } from "./CourseList";
import * as actions from "../actions/courseActionCreators";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("CourseList component (connected)", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: {
        entities: {
          "1": { id: "1", name: "ES6", credit: 60, isSelected: false },
          "2": { id: "2", name: "Webpack", credit: 20, isSelected: true },
        },
      },
    });
  });

  it("should dispatch fetchCourses on mount", () => {
    const fetchCoursesSpy = jest.spyOn(actions, "fetchCourses").mockReturnValue(() => ({ type: "DUMMY" }));

    mount(
      <Provider store={store}>
        <ConnectedCourseList />
      </Provider>
    );

    expect(fetchCoursesSpy).toHaveBeenCalled();
    fetchCoursesSpy.mockRestore();
  });
});

describe("CourseList component (unconnected)", () => {
  it("should call selectCourse and unSelectCourse from onChangeRow", () => {
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();

    const wrapper = shallow(
      <CourseList
        listCourses={[
          { id: "1", name: "ES6", credit: 60, isSelected: false },
          { id: "2", name: "Webpack", credit: 20, isSelected: true },
        ]}
        fetchCourses={jest.fn()}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );

    const instance = wrapper.instance();

    instance.onChangeRow("1", true);
    expect(selectCourse).toHaveBeenCalledWith("1");

    instance.onChangeRow("2", false);
    expect(unSelectCourse).toHaveBeenCalledWith("2");
  });
});

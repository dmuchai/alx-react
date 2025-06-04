import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 and header style when textSecondCell is null", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />
    );

    const tr = wrapper.find("tr");
    expect(tr.prop("style")).toEqual({ backgroundColor: "#deb5b545" });

    const th = wrapper.find("th");
    expect(th).toHaveLength(1);
    expect(th.prop("colSpan")).toBe(2);
    expect(th.text()).toBe("test");
  });

  it("should render two td cells and row style when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="data" />
    );

    const tr = wrapper.find("tr");
    expect(tr.prop("style")).toEqual({ backgroundColor: "#f5f5f5ab" });

    const td = wrapper.find("td");
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toBe("test");
    expect(td.at(1).text()).toBe("data");
  });

  it("should render two th cells and header style when isHeader is true and both cells are provided", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />
    );

    const tr = wrapper.find("tr");
    expect(tr.prop("style")).toEqual({ backgroundColor: "#deb5b545" });

    const th = wrapper.find("th");
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toBe("Header1");
    expect(th.at(1).text()).toBe("Header2");
  });
});


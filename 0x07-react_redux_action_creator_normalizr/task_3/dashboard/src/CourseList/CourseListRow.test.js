import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Course List Row component test', () => {
  it('should render one cell with colspan = 2 and header style when textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const th = wrapper.find("th");
    expect(th).toHaveLength(1);
    expect(Number(th.prop("colSpan"))).toBe(2); // 💡 Fix here
    expect(th.text()).toBe("test");
  });

  it('should render two th cells when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    const th = wrapper.find("th");
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toBe("test1");
    expect(th.at(1).text()).toBe("test2");
  });

  it('should render two td cells when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="body1" textSecondCell="body2" />);
    const td = wrapper.find("td");
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toBe("body1");
    expect(td.at(1).text()).toBe("body2");
  });
});

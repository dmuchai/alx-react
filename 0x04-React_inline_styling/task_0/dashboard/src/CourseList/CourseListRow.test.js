import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one header cell with colspan=2 and correct style when textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });

  it('renders two header cells with correct style', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual('test');
    expect(th.at(1).text()).toEqual('second');
  });

  it('renders two data cells with correct style', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='test'
        textSecondCell='second'
      />
    );
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('test');
    expect(td.at(1).text()).toEqual('second');
  });
});

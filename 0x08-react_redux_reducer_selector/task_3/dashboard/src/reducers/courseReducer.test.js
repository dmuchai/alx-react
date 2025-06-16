import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

const courses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('courseReducer', () => {
  it('should return the initial state (empty Map)', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({});
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    };

    const expected = {
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    };

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(expected);
  });

  it('should handle SELECT_COURSE', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    };
    let state = courseReducer(undefined, fetchAction);

    const selectAction = {
      type: SELECT_COURSE,
      index: 2
    };
    state = courseReducer(state, selectAction);

    expect(state.getIn(['2', 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    };
    let state = courseReducer(undefined, fetchAction);

    state = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    state = courseReducer(state, { type: UNSELECT_COURSE, index: 2 });

    expect(state.getIn(['2', 'isSelected'])).toBe(false);
  });
});

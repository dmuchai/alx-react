import { createSelector } from 'reselect';
import { Map } from 'immutable';

const courseEntitiesSelector = (state) => state.courses;

export const getListCourses = createSelector(
  courseEntitiesSelector,
  (courses) => (Map.isMap(courses) ? courses.valueSeq().toList() : [])
);

// selectors/courseSelector.test.js
import { getListCourses } from './courseSelector';
import { Map } from 'immutable';

describe('getListCourses', () => {
  it('should return an empty list for non-immutable state', () => {
    const state = { courses: {} };
    expect(getListCourses(state).toJS()).toEqual([]);
  });

  it('should return a list of course values from immutable state', () => {
    const state = {
      courses: Map({
        1: { id: 1, name: 'ES6' },
        2: { id: 2, name: 'React' }
      })
    };
    const result = getListCourses(state).toJS();
    expect(result).toEqual([
      { id: 1, name: 'ES6' },
      { id: 2, name: 'React' }
    ]);
  });
});

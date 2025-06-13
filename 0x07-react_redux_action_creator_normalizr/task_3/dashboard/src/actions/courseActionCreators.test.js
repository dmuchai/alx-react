import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course Action Creators', () => {
  it('selectCourse(1) should return correct action', () => {
    const expected = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(expected);
  });

  it('unSelectCourse(1) should return correct action', () => {
    const expected = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(expected);
  });
});

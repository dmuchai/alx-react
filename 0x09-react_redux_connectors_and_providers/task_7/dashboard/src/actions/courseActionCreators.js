import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const setCourses = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data
});

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/courses.json')
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)));
  };
};

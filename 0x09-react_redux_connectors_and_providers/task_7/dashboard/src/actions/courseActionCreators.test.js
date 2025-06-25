import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchCourses } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('fetchCourses', () => {
  it('dispatches FETCH_COURSE_SUCCESS with data from API', () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, name: 'ES6' }]));

    const expectedActions = [{
      type: FETCH_COURSE_SUCCESS,
      data: [{ id: 1, name: 'ES6' }]
    }];

    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

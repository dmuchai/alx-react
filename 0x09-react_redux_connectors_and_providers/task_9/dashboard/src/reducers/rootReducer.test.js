import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should correctly initialize UI sub-state with Immutable data', () => {
    const state = rootReducer(undefined, { type: '@@INIT' });

    expect(typeof state.ui.get).toBe('function'); // Immutable.js check

    // If you want to assert structure:
    expect(Map.isMap(state.ui)).toBe(true);

    // Optional: Check default value
    expect(state.ui.get('isUserLoggedIn')).toBe(false);
  });
});


import protectedDataReducer from './protected-data';

describe('protectedDataReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = protectedDataReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toHaveProperty('data', '');
    expect(state).toHaveProperty('addComicData', '');
    expect(state).toHaveProperty('error', null);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = protectedDataReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});


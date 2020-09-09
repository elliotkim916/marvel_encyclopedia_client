import comicReducer from './comics';

describe('comicReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = comicReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toHaveProperty('clickedComic', {});
    expect(state).toHaveProperty('comicCharacter', []);
    expect(state).toHaveProperty('loading', false);
    expect(state).toHaveProperty('error', null);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = comicReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });
});

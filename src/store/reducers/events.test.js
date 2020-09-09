import eventReducer from './events';

describe('eventReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = eventReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toHaveProperty('clickedEvent', {});
    expect(state).toHaveProperty('eventCharacter', []);
    expect(state).toHaveProperty('eventComic', []);
    expect(state).toHaveProperty('loading', false);
    expect(state).toHaveProperty('error', null);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = eventReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });
});

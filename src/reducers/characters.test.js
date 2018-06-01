import {characterReducer} from './characters';

describe('characterReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = characterReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toHaveProperty('searchedCharacter', {});
        expect(state).toHaveProperty('searchedCharacterComic', []);
        expect(state).toHaveProperty('searchedCharacterEvent', []);
        expect(state).toHaveProperty('characterLoading', false);
        expect(state).toHaveProperty('comicLoading', false);
        expect(state).toHaveProperty('eventLoading', false);
        expect(state).toHaveProperty('error', null);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = characterReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});
import {
    SEARCH_CHARACTER_REQUEST,
    searchCharacterRequest,
    SEARCH_CHARACTER_SUCCESS,
    searchCharacterSuccess,
    SEARCH_CHARACTER_ERROR,
    searchCharacterError,
    searchCharacter,
    SEARCH_CHARACTER_COMIC_REQUEST,
    searchCharacterComicRequest,
    SEARCH_CHARACTER_COMIC_SUCCESS,
    findCharacterComic,
    SEARCH_CHARACTER_EVENT_REQUEST,
    searchCharacterEventRequest,
    SEARCH_CHARACTER_EVENT_SUCCESS,
    findCharacterEvent,
    searchCharacterComicSuccess,
    searchCharacterEventSuccess
} from './characters';

describe('searchCharacterRequest', () => {
    it('Should return the action', () => {
        const character = 'Thor';
        const action = searchCharacterRequest(character);
        expect(action.type).toEqual(SEARCH_CHARACTER_REQUEST);
    });
});

describe('searchCharacterError', () => {
    it('Should return the action', () => {
        const error = 'Search Error!';
        const action = searchCharacterError(error);
        expect(action.type).toEqual(SEARCH_CHARACTER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('searchCharacterSuccess', () => {
    it('Should return the action', () => {
        const character = 'Thor';
        const action = searchCharacterSuccess(character);
        expect(action.type).toEqual(SEARCH_CHARACTER_SUCCESS);
        expect(action.character).toEqual(character);
    });
});

describe('searchCharacterComicRequest', () => {
    it('Should return the action', () => {
        const action = searchCharacterComicRequest();
        expect(action.type).toEqual(SEARCH_CHARACTER_COMIC_REQUEST);
    });
});

describe('searchCharacterComicSuccess', () => {
    it('Should return the action', () => {
        const comic = 'Avengers One';
        const action = searchCharacterComicSuccess(comic);
        expect(action.type).toEqual(SEARCH_CHARACTER_COMIC_SUCCESS);
        expect(action.characterComic).toEqual(comic);
    });
});

describe('searchCharacterEventRequest', () => {
    it('Should return the action', () => {
        const action = searchCharacterEventRequest();
        expect(action.type).toEqual(SEARCH_CHARACTER_EVENT_REQUEST);
    });
});

describe('searchCharacterEventSuccess', () => {
    it('Should return the action', () => {
        const event = 'Avengers Two';
        const action = searchCharacterEventSuccess(event);
        expect(action.type).toEqual(SEARCH_CHARACTER_EVENT_SUCCESS);
        expect(action.characterEvent).toEqual(event);
    });
});
import {
  FIND_EVENT_REQUEST,
  findEventRequest,
  FIND_EVENT_SUCCESS,
  findEventSuccess,
  FIND_EVENT_ERROR,
  findEventError,
  SEARCH_EVENT_CHARACTER_REQUEST,
  searchEventCharacterRequest,
  SEARCH_EVENT_CHARACTER_SUCCESS,
  SEARCH_EVENT_COMIC_REQUEST,
  searchEventComicRequest,
  SEARCH_EVENT_COMIC_SUCCESS,
  searchEventCharacterSuccess,
  searchEventComicSuccess
} from './events';

describe('findEventRequest', () => {
  it('Should return the action', () => {
    const action = findEventRequest();
    expect(action.type).toEqual(FIND_EVENT_REQUEST);
  });
});

describe('findEventError', () => {
  it('Should return the action', () => {
    const error = 'Search error!';
    const action = findEventError(error);
    expect(action.type).toEqual(FIND_EVENT_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('findEventSuccess', () => {
  it('Should return the action', () => {
    const event = 'Lorem Ipsum';
    const action = findEventSuccess(event);
    expect(action.type).toEqual(FIND_EVENT_SUCCESS);
    expect(action.event).toEqual(event);
  });
});

describe('searchEventCharacterRequest', () => {
  it('Should return the action', () => {
    const action = searchEventCharacterRequest();
    expect(action.type).toEqual(SEARCH_EVENT_CHARACTER_REQUEST);
  });
});

describe('searchEventCharacterSuccess', () => {
  it('Should return the action', () => {
    const eventCharacter = 'Lorem Ipsum';
    const action = searchEventCharacterSuccess(eventCharacter);
    expect(action.type).toEqual(SEARCH_EVENT_CHARACTER_SUCCESS);
    expect(action.eventCharacter).toEqual(eventCharacter);
  });
});

describe('searchEventComicRequest', () => {
  it('Should return the action', () => {
    const action = searchEventComicRequest();
    expect(action.type).toEqual(SEARCH_EVENT_COMIC_REQUEST);
  });
});

describe('searchEventComicSuccess', () => {
  it('Should return the action', () => {
    const eventComic = 'Lorem Ipsum';
    const action = searchEventComicSuccess(eventComic);
    expect(action.type).toEqual(SEARCH_EVENT_COMIC_SUCCESS);
    expect(action.eventComic).toEqual(eventComic);
  });
});

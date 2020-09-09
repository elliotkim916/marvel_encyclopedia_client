import {
  findComicRequest,
  findComicSuccess,
  findComicError,
  findComicCharacterRequest,
  findComicCharacterSuccess,
} from './comics';
import * as actionTypes from './actionTypes';

describe('findComicRequest', () => {
  it('Should return the action', () => {
    const action = findComicRequest();
    expect(action.type).toEqual(actionTypes.FIND_COMIC_REQUEST);
  });
});

describe('findComicError', () => {
  it('Should return the action', () => {
    const error = 'Error!';
    const action = findComicError(error);
    expect(action.type).toEqual(actionTypes.FIND_COMIC_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('findComicSuccess', () => {
  it('Should return the action', () => {
    const comic = 'Thor vs Hulk!';
    const action = findComicSuccess(comic);
    expect(action.type).toEqual(actionTypes.FIND_COMIC_SUCCESS);
    expect(action.comic).toEqual(comic);
  });
});

describe('findComicCharacterRequest', () => {
  it('Should return the action', () => {
    const action = findComicCharacterRequest();
    expect(action.type).toEqual(actionTypes.FIND_COMIC_CHARACTER_REQUEST);
  });
});

describe('findComicCharacterSuccess', () => {
  it('Should return the action', () => {
    const character = 'Thanos';
    const action = findComicCharacterSuccess(character);
    expect(action.type).toEqual(actionTypes.FIND_COMIC_CHARACTER_SUCCESS);
    expect(action.comicCharacter).toEqual(character);
  });
});

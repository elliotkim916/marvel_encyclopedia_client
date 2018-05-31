import {
    FETCH_PROTECTED_DATA_SUCCESS,
    fetchProtectedDataSuccess,
    FETCH_PROTECTED_DATA_ERROR,
    fetchProtectedDataError,
    ADD_PROTECTED_DATA_SUCCESS,
    addProtectedDataSuccess,
    DELETE_PROTECTED_DATA_SUCCESS,
    deleteProtectedDataSuccess,
    fetchProtectedData,
    addData,
    deleteData
} from './protected-data';

describe('fetchProtectedDataSuccess', () => {
    it('Should return the action', () => {
        const data = {'Thor': 'From Asgard'};
        const action = fetchProtectedDataSuccess(data);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
        expect(action.protected).toEqual(data);
    });
});

describe('fetchProtectedDataError', () => {
    it('Should return the action', () => {
        const error = 'Error!';
        const action = fetchProtectedDataError(error);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('addProtectedDataSuccess', () => {
    it('Should return the action', () => {
        const comic = {'Thor': 'Thor Dies!'};
        const action = addProtectedDataSuccess(comic);
        expect(action.type).toEqual(ADD_PROTECTED_DATA_SUCCESS);
        // expect(action.addComicdata).toEqual(comic);
    });
});

describe('deleteProtectedDataSuccess', () => {
    it('Should return the action', () => {
        const error = 'Deleted!';
        const action = deleteProtectedDataSuccess(error);
        expect(action.type).toEqual(DELETE_PROTECTED_DATA_SUCCESS);
        expect(action.error).toEqual(error);
    });
});
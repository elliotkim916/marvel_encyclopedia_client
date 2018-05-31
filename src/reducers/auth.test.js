import authReducer from './auth';

describe('authReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual(currentState);
    });
});
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.catch(err => {
		const {reason, message, location} = err;
// when user tries to register with a username that is already taken
		if (reason === 'ValidationError') {
			throw Promise.reject(
				new SubmissionError({
					[location]: message
				})
			);
		}
		throw new SubmissionError({
			[location]: message
		});
	});
}
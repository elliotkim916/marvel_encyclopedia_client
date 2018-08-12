// This code handles any errors which we receive from the API
// If the error contains JSON, then we decode it 
// and return a rejected promise containing the decoded error object
// If the error just contains text, then we create a new error object and return it in a rejected promise

export const normalizeResponseErrors = res => {
	if (!res.ok) {
		if (
			res.headers.has('content-type') &&
			res.headers.get('content-type').startsWith('application/json')
		) {
			return res.json().then(err => Promise.reject(err));
		}
		return Promise.reject({
			code: res.status,
			message: res.statusText
		});
	}
	return res;
}
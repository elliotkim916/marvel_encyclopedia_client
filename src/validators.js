export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

// validator creator function
export const valueLength = value => {
    if (value.length < 7) {
        return `Must be at least 7 characters long`;
    }

    if (value.length > 25) {
        return `Must be at most 25 characters long`;
    }
};

// allValues is an object which contains the values entered into each form
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';
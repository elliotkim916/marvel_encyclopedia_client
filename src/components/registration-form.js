import React from 'react';
import {Field, reduxForm, focus, SubmissionError} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {valueLength, required, nonEmpty, matches, isTrimmed} from '../validators';
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props.dispatch(registerUser(user))
    .then(() => { 
      return this.props.dispatch(login(username, password))
      }).catch((e) => {
        if (e.name === 'SubmissionError') {
          throw new SubmissionError({username: 'Username already exists.'})
        }
    });
  }

  render() {
    return (
        <form 
          className="signup-form"
          onSubmit={this.props.handleSubmit(values => 
            this.onSubmit(values)
        )}>
          <Field 
            component={Input}
            type="text"
            name="username"
            label="Enter username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field 
            component={Input}
            type="password"
            name="password"
            label="Enter password"
            validate={[required, isTrimmed, valueLength]}
          />
          <Field 
            component={Input}
            type="password"
            name="passwordConfirm"
            label="Confirm password"
            validate={[required, nonEmpty, matchesPassword]}    
          />  
          <button 
            type="submit"
            disabled={
              this.props.pristine ||
              this.props.submitting
            }
            className="register-btn"
            >
            REGISTER
          </button>
        </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
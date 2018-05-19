import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                <h3>Log in</h3>
                    {error}
                    <Field 
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        label="Enter username"
                        validate={[required, nonEmpty]}
                    />
                    <Field 
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        label="Enter password"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button><br/>
                    <span>Don't have an account? <a href="/register">Sign up here</a></span>
                </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
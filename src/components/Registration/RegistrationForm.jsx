import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/users';
import { login } from '../../store/actions/auth';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './RegistrationPage.module.css';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string()
    .min(7, 'Must be at least 7 characters long')
    .required(),
  passwordConfirm: Yup.string()
    .min(7, 'Must be at least 7 characters long')
    .required(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = async (values) => {
    const { username, password } = values;
    const newUser = { username, password };

    const response = await dispatch(registerUser(newUser));
    const { user } = response;
    if (user.username && user._id) {
      dispatch(login(username, password));
    }
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords must match';
    }
  };

  return (
    <Formik
      validationSchema={RegistrationSchema}
      initialValues={{ username: '', password: '', passwordConfirm: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, values, errors, touched, isValid }) => (
        <Form className="form">
          <Field
            type="text"
            name="username"
            className="user-input"
            placeholder="Enter username"
            onChange={handleChange}
            value={values.username}
            innerRef={inputRef}
            autoComplete="username"
          />
          {errors.username && touched.username && (
            <span className="login-error-msg">{errors.username}</span>
          )}

          <Field
            type="password"
            name="password"
            className="user-input"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password}
            autoComplete="new-password"
          />
          {errors.password && touched.password && (
            <span className="login-error-msg">{errors.password}</span>
          )}

          <Field
            name="passwordConfirm"
            type="password"
            className="user-input"
            placeholder="Confirm password"
            onChange={handleChange}
            value={values.passwordConfirm}
            autoComplete="new-password"
            validate={(value) =>
              validateConfirmPassword(values.password, value)
            }
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <span className="login-error-msg">{errors.passwordConfirm}</span>
          )}

          <button type="submit" disabled={!isValid} className="register-btn">
            REGISTER
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;

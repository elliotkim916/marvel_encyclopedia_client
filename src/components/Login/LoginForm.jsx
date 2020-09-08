import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../Registration/RegistrationPage.module.css';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (values) => {
    dispatch(login(values.username, values.password));
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ username: '', password: '' }}
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
            autoComplete="current-password"
          />
          {errors.password && touched.password && (
            <span className="login-error-msg">{errors.password}</span>
          )}

          <button type="submit" disabled={!isValid} className="register-btn">
            LOG IN
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

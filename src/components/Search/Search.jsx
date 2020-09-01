import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { searchCharacter } from '../../actions/characters';
import { Formik, Form, Field } from 'formik';
import SearchHeader from './SearchHeader';
import './Search.module.css';

const Search = ({ dispatch }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onSubmit = (values, { resetForm }) => {
    dispatch(searchCharacter(values.searchValue));
    resetForm();
  };

  return (
    <section className="search-form-section">
      <SearchHeader />

      <Formik initialValues={{ searchValue: '' }} onSubmit={onSubmit}>
        {({ handleChange, values }) => (
          <Form className="search-form">
            <Field
              id="searchValue"
              placeholder="e.g. Thor"
              className="search-input"
              innerRef={searchRef}
              onChange={handleChange}
              value={values.character}
              required
            />

            <span className="focus-border"></span>
            <button type="submit" className="search-btn" aria-label="Search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default connect()(Search);

import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AddContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Please write down name'),
  number: Yup.number().required('Please write down number').integer(),
});

const initialValues = {
  name: '',
  number: '',
};

export class AddContactForm extends Component {
  onSubmit = (values, { resetForm }) => {
    this.props.onFormSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.onSubmit}
      >
        <Form className={css.contacts__form}>
          <label htmlFor="name" className={css.contacts__label}>
            Name
            <Field
              id="name"
              type="text"
              name="name"
              className={css.contacts__input}
            />
            <ErrorMessage name="name" />
          </label>
          <label htmlFor="number" className={css.contacts__label}>
            Number
            <Field
              id="number"
              type="tel"
              name="number"
              className={css.contacts__input}
            />
            <ErrorMessage name="number" />
          </label>
          <button className={css.button__submit} type="Submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

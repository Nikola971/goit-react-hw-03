
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name cannot exceed 50 characters'),
      number: Yup.string()
        .required('Number is required')
        .min(3, 'Number must be at least 3 characters')
        .max(20, 'Number cannot exceed 20 characters'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number && (
          <div>{formik.errors.number}</div>
        )}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};



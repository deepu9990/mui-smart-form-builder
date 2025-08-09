import React from 'react';
import { useFormik } from 'formik';
import { SmartFormBuilder, FieldConfig, ButtonConfig } from '../src/index';

export const SimpleExample: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: 0,
      subscribe: false
    },
    validate: (values) => {
      const errors: any = {};
      
      if (!values.name) {
        errors.name = 'Name is required';
      }
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!values.age) {
        errors.age = 'Age is required';
      } else if (values.age < 18) {
        errors.age = 'Must be at least 18 years old';
      }
      
      return errors;
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert(`Form submitted successfully!\n${JSON.stringify(values, null, 2)}`);
    }
  });

  const fields: FieldConfig[] = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'text',
      placeholder: 'Enter your email',
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      min: 18,
      max: 120,
      required: true,
      grid: { xs: 12, md: 6 },
      muiProps: { fullWidth: true }
    },
    {
      type: 'empty',
      grid: { xs: 12, md: 6 }
    },
    {
      name: 'subscribe',
      label: 'Subscribe to newsletter',
      type: 'checkbox',
      grid: { xs: 12 }
    }
  ];

  const buttons: ButtonConfig[] = [
    {
      label: 'Reset',
      variant: 'outlined',
      onClick: (formik) => formik.resetForm()
    },
    {
      label: 'Submit',
      variant: 'contained',
      type: 'submit'
    }
  ];

  return (
    <SmartFormBuilder
      formik={formik}
      title="Simple Contact Form"
      fields={fields}
      buttons={buttons}
      gridSpacing={2}
    />
  );
};

export default SimpleExample;

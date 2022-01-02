import { useFormik } from 'formik';
import React from 'react';
import Button, { ButtonVariant } from '../../components/Button/button';
import InputField from '../../components/InputField/inputField';
import Form from '../../layouts/Form/form';
import validationSchema from './validation';

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit() {
      alert('submitted');
    },
    validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputField
        name="email"
        inputTouched={formik.touched.email}
        error={formik.errors.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputField
        name="username"
        inputTouched={formik.touched.username}
        error={formik.errors.username}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <InputField
        name="password"
        inputTouched={formik.touched.password}
        error={formik.errors.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        inputType="password"
      />
      <InputField
        name="confirmPassword"
        inputTouched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        inputType="password"
      />
      <Button type="submit" variant={ButtonVariant.form}>
        Sign Up
      </Button>
			{/* add the going back to login link */}
    </Form>
  );
};

export default SignUpPage;

import Form from '../../layouts/Form/form';
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import InputField from '../../components/InputField/inputField';
import Button, { ButtonVariant } from '../../components/Button/button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: { password: '', email: '' },
    onSubmit() {
      alert('submitted');
    },
    validationSchema,
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <InputField
          name="email"
          error={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          inputTouched={formik.touched.email}
        />
        <InputField
          name="password"
          inputType="password"
          error={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          inputTouched={formik.touched.password}
        />
        <Button variant={ButtonVariant.form} type="submit">
          login
        </Button>
        {/* this is temporary */}
        <p className="mx-auto  mt-4 font-semibold">
          Don't have an account?{' '}
          <Link className="text-blue-600 font-semibold underline" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;

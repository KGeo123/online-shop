import Form from '../../layouts/Form/form';
import React from 'react';
import { Field, useFormik } from 'formik';
import validationSchema from './validation';
import Input from '../../components/Input/input';

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
        <Input
          hasError={!!formik.errors.email && formik.touched.email}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          type="password"
          hasError={!!formik.errors.password && formik.touched.password}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">submit</button>
      </Form>
    </div>
  );
};

export default LoginPage;

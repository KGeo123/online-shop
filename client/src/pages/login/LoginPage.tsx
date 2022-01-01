import Form from '../../layouts/Form/form';
import React from 'react';
import { useFormik } from 'formik';
import Input from '../../components/Input/input';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: { password: '', email: '' },
    onSubmit() {
      alert('submitted');
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">submit</button>
      </Form>
    </div>
  );
};

export default LoginPage;

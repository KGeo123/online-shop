import Form from '../../layouts/Form/form';
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import InputField from '../../components/InputField/inputField';
import Button, { ButtonVariant } from '../../components/Button/button';

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
        />
        <InputField
          name="password"
          inputType="password"
          error={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button variant={ButtonVariant.form} type="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;

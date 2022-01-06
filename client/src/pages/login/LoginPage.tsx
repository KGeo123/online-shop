import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Button, { ButtonVariant } from '../../components/Button/button';
import InputField from '../../components/InputField/inputField';
import PromptLink from '../../components/PropmptLink/propmptLink';
import Form from '../../layouts/Form/form';
import validationSchema from './validation';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: { password: '', email: '' },
    onSubmit() {
      alert('submitted');
    },
    validationSchema,
  });

  return (
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
      <PromptLink
        linkText="Sign Up"
        href="/sign-up"
        prompt="Dont't have an account..."
      />
    </Form>
  );
};

export default LoginPage;

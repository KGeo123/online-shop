import Form from '../../layouts/Form/form';
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import InputField from '../../components/InputField/inputField';
import Button, { ButtonVariant } from '../../components/Button/button';
import PromptLink from '../../components/PropmptLink/propmptLink';

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
        <PromptLink
          linkText="Sign Up"
          href="/sign-up"
          prompt="Dont't have an account..."
        />
      </Form>
    </div>
  );
};

export default LoginPage;

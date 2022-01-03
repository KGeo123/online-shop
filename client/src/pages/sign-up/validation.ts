import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('enter a valid email').required(),
  username: yup.string().min(4, 'must be at least 4 charcters').required(),
  password: yup.string().min(8, 'must be at least 8 characters').required(),
  confirmPassword: yup
    .string()
    .equals([yup.ref('password')], 'passwords do not match')
    .required('please confirm password'),
});

export default validationSchema;

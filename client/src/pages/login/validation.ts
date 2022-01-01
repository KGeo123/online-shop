import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('enter a valid email').required(),
  password: yup.string().min(8, 'must be at least 8 characters').required(),
});

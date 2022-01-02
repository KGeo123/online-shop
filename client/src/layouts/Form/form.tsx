import { Form as FormikForm } from 'formik';
import styled from 'styled-components';
import tw from 'twin.macro';

const Form = styled.form`
  ${tw`bg-gray-200 py-4 px-4 max-w-sm w-5/6 rounded-lg shadow-md`}
  ${tw`mx-auto`}
  ${tw`flex flex-col`}
`;

export default Form;

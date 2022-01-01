import { Form as FormikForm } from 'formik';
import styled from 'styled-components';
import tw from 'twin.macro';

const Form = styled(FormikForm)`
  ${tw`bg-gray-200 py-4 px-2 max-w-sm rounded-lg shadow-md`}
  ${tw`md:mx-auto mx-3 `}
  ${tw`flex flex-col`}
`;

export default Form;

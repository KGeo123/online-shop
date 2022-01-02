import styled from 'styled-components';
import tw from 'twin.macro';

const Input = styled.input`
  ${tw`w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm`}
  ${tw`focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
	${tw`transition-colors`}
	${({ hasError }: { hasError?: boolean }) =>
    hasError && tw`focus:ring-red-500 border-red-500 bg-red-100`}
`;

export default Input;

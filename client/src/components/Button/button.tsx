import styled from 'styled-components';
import tw from 'twin.macro';

export enum ButtonVariant {
  form,
}

const Button = styled.button`
  ${({ variant }: { variant: ButtonVariant }) => {
    if (variant === ButtonVariant.form) {
      return tw`rounded shadow bg-purple-500 text-white font-semibold
								mx-auto py-2 px-4 w-full md:w-1/3 mt-4
								transition-colors hover:bg-purple-400 ease-out
			`;
    }
  }}
`;

export default Button;

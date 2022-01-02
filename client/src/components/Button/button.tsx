import styled from 'styled-components';
import tw from 'twin.macro';

export enum ButtonVariant {
	form
}

const Button = styled.button`

	${({variant}: {variant: ButtonVariant}) => {
		if (variant === ButtonVariant.form) {
			return tw``;
		}
	}}
`

export default Button;

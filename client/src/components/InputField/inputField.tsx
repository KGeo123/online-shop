import React from 'react';
import InputContainer from '../../layouts/InputContainer/inputContainer';
import Label from '../Label/label';
import Input from '../Input/input';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface Props {
  error?: string;
  name: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  inputType?: React.HTMLInputTypeAttribute;
  inputTouched?: boolean;
}

const InputField: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.name}>{props.name}</Label>
      <Input
        placeholder={props.name}
        hasError={!!props.error && props.inputTouched}
        name={props.name}
        id={props.name}
        type={props.inputType ?? 'text'}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.inputTouched && <ErrorMessage>{props.error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputField;

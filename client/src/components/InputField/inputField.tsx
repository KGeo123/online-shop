import React from 'react';
import InputContainer from '../../layouts/InputContainer/inputContainer';
import Label from '../Label/label';
import Input from '../Input/input';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface Props {
  error?: string;
  name: string;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  inputType?: React.HTMLInputTypeAttribute;
}

const InputField: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.name}></Label>
      <Input
        hasError={!!props.error}
        name={props.name}
        id={props.name}
        placeholder={props.name}
        type={props.inputType ?? 'text'}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputField;

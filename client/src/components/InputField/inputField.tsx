import React from 'react';
import InputContainer from '../../layouts/InputContainer/inputContainer';
import Label from '../Label/label';
import Input from '../Input/input';
import ErrorMessage from '../ErrorMessage/errorMessage';
import { AnimatePresence } from 'framer-motion';

interface Props {
  error?: string;
  name: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  inputType?: React.HTMLInputTypeAttribute;
  inputTouched?: boolean;
  labelText?: string;
}

const InputField: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.name}>{props.labelText ?? props.name}</Label>
      <Input
        placeholder={props.labelText ?? props.name}
        hasError={!!props.error && props.inputTouched}
        name={props.name}
        id={props.name}
        type={props.inputType ?? 'text'}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <AnimatePresence initial={true}>
        {props.inputTouched && props.error && (
          <ErrorMessage key="error">{props.error}</ErrorMessage>
        )}
      </AnimatePresence>
    </InputContainer>
  );
};

export default InputField;

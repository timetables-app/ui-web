import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select
} from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import React, { FunctionComponent, ReactNode } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const SelectField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
  // fixme incompatible mui & redux-form types
  return <Field name={name} component={render} {...muiProps as any} />;
};

interface Props {
  name: string;
  label: string;
  children: ReactNode;
}

const render = ({
  input,
  meta: { touched, invalid, error },
  children,
  label
}: WrappedFieldProps & Props) => {
  return (
    <FormControl error={touched && error} fullWidth variant="outlined">
      <InputLabel htmlFor={input.name}>{label}</InputLabel>
      <Select
        {...input}
        input={
          <OutlinedInput labelWidth={200} name={input.name} id={input.name} />
        }
      >
        {children}
      </Select>
      {touched && error && <FormHelperText>{touched && error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;

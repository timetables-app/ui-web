import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const TextField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
  // fixme incompatible mui & redux-form types
  return <Field name={name} component={render} {...muiProps as any} />;
};

type Props = TextFieldProps & {
  name: string;
};

const render = ({
  input,
  meta: { touched, invalid, error },
  ...muiProps
}: WrappedFieldProps) => (
  <MuiTextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...muiProps}
  />
);

export default TextField;

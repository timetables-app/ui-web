import { TextField as MuiTextField } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent, ReactNode } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const TextField: FunctionComponent<Props> = ({
  name,
  ...muiTextFieldProps
}) => {
  return <Field name={name} component={render(muiTextFieldProps)} />;
};

type Props = TextFieldProps & {
  name: string;
};

const render: (
  muiTextFieldProps: TextFieldProps
) => (reduxFormProps: WrappedFieldProps) => ReactNode = muiTextFieldProps => ({
  input,
  meta: { touched, invalid, error }
}) => (
  <MuiTextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...muiTextFieldProps}
  />
);

export default TextField;

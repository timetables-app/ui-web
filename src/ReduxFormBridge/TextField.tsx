import { TextField as MuiTextField } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const TextField: FunctionComponent<Props> = props => {
  const { rows, value, defaultValue, variant, ...rest } = props;
  return (
    <Field
      component={renderTextField({ rows, value, defaultValue, variant })}
      {...rest}
    />
  );
};

type Props = TextFieldProps & {
  name: string;
};

const renderTextField = (muiPropsIncompatibleWithReduxForm: any) => ({
  input,
  meta: { touched, invalid, error },
  ...custom
}: WrappedFieldProps) => (
  <MuiTextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    {...muiPropsIncompatibleWithReduxForm}
  />
);

export default TextField;

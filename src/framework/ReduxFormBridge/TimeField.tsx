import { TextFieldProps } from '@material-ui/core/TextField';
import { TimePicker } from 'material-ui-pickers';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const TimeField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
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
  <TimePicker
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    ampm={false}
    {...muiProps}
  />
);

export default TimeField;

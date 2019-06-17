import { TextFieldProps } from '@material-ui/core/TextField';
import { DateTimePicker } from 'material-ui-pickers';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const DateTimeField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
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
  <DateTimePicker
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    ampm={false}
    disablePast
    showTodayButton
    {...muiProps}
  />
);

export default DateTimeField;

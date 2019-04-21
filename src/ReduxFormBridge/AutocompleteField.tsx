import { TextField as MuiTextField } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const AutocompleteField: FunctionComponent<Props> = props => {
  return <Field component={renderAutocompleteField} {...props} />;
};

interface Props {
  name: string;
  label: string;
}

const renderAutocompleteField = ({
  input,
  meta: { touched, invalid, error },
  ...custom
}: WrappedFieldProps) => (
  <MuiTextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default AutocompleteField;

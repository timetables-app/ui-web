import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import Autocomplete, { SuggestionsFetcher } from '../Autocomplete';

const AutocompleteField: FunctionComponent<Props> = ({
  name,
  fetchSuggestions,
  ...muiProps
}) => {
  // fixme incompatible mui & redux-form types
  return (
    <Field
      name={name}
      component={render}
      fetchSuggestions={fetchSuggestions}
      {...muiProps as any}
    />
  );
};

type Props = SuggestionsFetcher &
  TextFieldProps & {
    name: string;
  };

const render = ({
  input,
  meta: { touched, invalid, error },
  fetchSuggestions,
  ...muiProps
}: RendererProps) => (
  <Autocomplete
    reduxFormProps={input}
    fetchSuggestions={fetchSuggestions}
    muiProps={{
      error: touched && invalid,
      helperText: touched && error,
      ...muiProps
    }}
  />
);

type RendererProps = WrappedFieldProps & SuggestionsFetcher;

export default AutocompleteField;

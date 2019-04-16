import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { TextFieldRendererProps } from '../schedule/GeoData/Place/Create';

const AutocompleteInput: FunctionComponent<Props> = ({
  inputRef,
  InputProps,
  resetInput,
  fieldProps: {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }
}) => {
  return (
    <div ref={inputRef}>
      <TextField
        InputProps={{
          endAdornment: InputProps.value && (
            <InputAdornment position="end">
              <IconButton onClick={resetInput}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
          ...InputProps
        }}
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    </div>
  );
};

interface Props {
  InputProps: any;
  resetInput: () => void;
  inputRef: (ref: HTMLDivElement | null) => void;
  fieldProps: TextFieldRendererProps;
}

export default AutocompleteInput;

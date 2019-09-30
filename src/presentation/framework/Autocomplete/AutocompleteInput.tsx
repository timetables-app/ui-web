import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import { Close } from '@material-ui/icons';
import { GetInputPropsOptions } from 'downshift';
import React, { FunctionComponent } from 'react';

const AutocompleteInput: FunctionComponent<Props> = ({
  downshiftProps,
  muiProps,
  resetInput,
  inputRef
}) => {
  return (
    <div ref={inputRef}>
      <TextField
        InputProps={{
          endAdornment: downshiftProps.value && (
            <InputAdornment position="end">
              <IconButton onClick={resetInput}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
          ...(downshiftProps as any) // fixme incompatible mui & downshift types
        }}
        {...muiProps}
      />
    </div>
  );
};

interface Props {
  downshiftProps: GetInputPropsOptions;
  muiProps: TextFieldProps;
  resetInput: () => void;
  inputRef: (ref: HTMLDivElement | null) => void;
}

export default AutocompleteInput;

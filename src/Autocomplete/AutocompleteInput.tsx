import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';

const AutocompleteInput: FunctionComponent<Props> = ({
  refx,
  InputProps,
  reset,
  clearSelection
}) => {
  return (
    <div ref={refx}>
      <TextField
        InputProps={{
          endAdornment: Adornment(InputProps.value, reset, clearSelection),
          ...InputProps
        }}
        variant="outlined"
        label="Miejscowość"
        fullWidth
      />
    </div>
  );
};

const Adornment = (
  value: string,
  reset: () => void,
  clearSelection: () => void
) => {
  if (!value) {
    return null;
  }
  return (
    <InputAdornment position="end">
      <IconButton
        onClick={() => {
          reset();
          clearSelection();
        }}
      >
        <Close />
      </IconButton>
    </InputAdornment>
  );
};

interface Props {
  InputProps: any;
  reset: any;
  clearSelection: any;
  refx: any;
}

export default AutocompleteInput;

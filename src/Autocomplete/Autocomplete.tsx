import {
  MenuItem,
  Paper,
  Popper,
  withStyles,
  WithStyles
} from '@material-ui/core';
import Downshift from 'downshift';
import React, { FunctionComponent } from 'react';
import AutocompleteInput from './AutocompleteInput';
import styles from './styles';
import AutocompletePopper from './AutocompletePopper';

const Autocomplete: FunctionComponent<Props> = ({ classes }) => {
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
        reset,
        clearSelection
      }: any) => {
        return (
          <div className={classes.container}>
            <AutocompleteInput
              reset={reset}
              clearSelection={clearSelection}
              InputProps={getInputProps()}
              refx={(node: any) => {
                popperNode = node;
              }}
            />
            <AutocompletePopper
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              popperNode={popperNode}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

interface Props extends WithStyles<typeof styles> {}

let popperNode: any;

export default withStyles(styles, { withTheme: true })(Autocomplete);

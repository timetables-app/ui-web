import { withStyles, WithStyles } from '@material-ui/core';
import Downshift from 'downshift';
import React, { FunctionComponent, RefObject, useState } from 'react';
import { TextFieldRendererProps } from '../schedule/GeoData/Place/Create';
import AutocompleteInput from './AutocompleteInput';
import AutocompletePopper, { Suggestion } from './AutocompletePopper';
import styles from './styles';

const Autocomplete: FunctionComponent<Props> = ({ classes, fieldProps }) => {
  const onChange = (v: Suggestion | null) =>
    fieldProps.input.onChange(v ? v.value : v);

  const itemToString = (v: Suggestion | string | null) =>
    typeof v === 'object' ? (v ? v.label : '') : v;

  const [inputRef, setInputRef] = useState<HTMLDivElement | null>(null);

  return (
    <Downshift onChange={onChange} itemToString={itemToString}>
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
        const resetInput = () => {
          reset();
          clearSelection();
        };

        return (
          <div className={classes.container}>
            <AutocompleteInput
              resetInput={resetInput}
              InputProps={getInputProps()}
              fieldProps={fieldProps}
              inputRef={setInputRef}
            />
            <AutocompletePopper
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              popperNode={inputRef}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

interface Props extends WithStyles<typeof styles> {
  fieldProps: TextFieldRendererProps;
}

export default withStyles(styles, { withTheme: true })(Autocomplete);

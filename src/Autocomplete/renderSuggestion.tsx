import { MenuItem } from '@material-ui/core';
import React from 'react';
import { Suggestion } from './types';

const renderSuggestion = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}: Props) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected =
    selectedItem && (selectedItem.value || '').indexOf(suggestion.value) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
};

interface Props {
  suggestion: Suggestion;
  index: number;
  itemProps: any;
  highlightedIndex?: number | null;
  selectedItem?: Suggestion | null;
}

export default renderSuggestion;

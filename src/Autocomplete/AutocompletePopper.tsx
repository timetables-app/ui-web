import { MenuItem, Paper, Popper } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';
import {
  decrementProgressActionCreator,
  incrementProgressActionCreator
} from '../Layout/LinearProgress';
import { connect } from 'react-redux';

const AutocompletePopper: FunctionComponent<Props> = ({
  popperNode,
  getMenuProps,
  inputValue,
  highlightedIndex,
  getItemProps,
  selectedItem,
  isOpen,
  incrementProgress,
  decrementProgress
}) => {
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  useEffect(() => {
    fetchData(incrementProgress, decrementProgress, inputValue, setSuggestions);
  }, [inputValue]);

  return (
    <Popper open={isOpen} anchorEl={popperNode} style={{ zIndex: 1 }}>
      <div {...(isOpen ? getMenuProps({}, { suppressRefError: true }) : {})}>
        <Paper
          square
          style={{
            marginTop: 8,
            width: popperNode ? popperNode.clientWidth : null
          }}
        >
          {suggestions.map((suggestion, index) =>
            renderSuggestion({
              highlightedIndex,
              index,
              itemProps: getItemProps({
                item: suggestion.label
              }),
              selectedItem,
              suggestion
            })
          )}
        </Paper>
      </div>
    </Popper>
  );
};

interface Props {
  popperNode: any;
  getMenuProps: any;
  inputValue: any;
  highlightedIndex: any;
  getItemProps: any;
  selectedItem: any;
  isOpen: any;
  decrementProgress: () => void;
  incrementProgress: () => void;
}

interface Suggestions {
  label: string;
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}: any) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

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
}

const fetchData = (
  incrementProgress: any,
  decrementProgress: any,
  q: string,
  setSuggestions: (suggestions: Suggestions[]) => void
) => {
  incrementProgress();
  return axios
    .get('http://localhost:8080/localities/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      setSuggestions(
        response.data._embedded.localities.map((locality: any) => ({
          label: `${locality.name}, ${locality.region}, ${locality.state}, ${
            locality.country
          }`,
          value: locality._links.self.href
        }))
      );
    })
    .finally(decrementProgress);
};

const mapDispatchToProps = {
  decrementProgress: decrementProgressActionCreator,
  incrementProgress: incrementProgressActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(AutocompletePopper);

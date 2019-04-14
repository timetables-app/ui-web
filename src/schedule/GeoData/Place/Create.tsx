import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  MenuItem,
  OutlinedInput,
  Paper,
  Popper,
  TextField
} from '@material-ui/core';
import * as React from 'react';
import Downshift from 'downshift';

const Create = () => {
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj miejsce" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Nazwa" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Szerokość geog."
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Długość geog."
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Miejscowość" />

                <Downshift id="downshift-popper">
                  {({
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    highlightedIndex,
                    inputValue,
                    isOpen,
                    selectedItem
                  }) => (
                    <div className={classes.container}>
                      {renderInput({
                        fullWidth: true,
                        classes,
                        InputProps: getInputProps({
                          placeholder: 'With Popper'
                        }),
                        ref: node => {
                          popperNode = node;
                        }
                      })}
                      <Popper open={isOpen} anchorEl={popperNode}>
                        <div
                          {...(isOpen
                            ? getMenuProps({}, { suppressRefError: true })
                            : {})}
                        >
                          <Paper
                            square
                            style={{
                              marginTop: 8,
                              width: popperNode ? popperNode.clientWidth : null
                            }}
                          >
                            {getSuggestions(inputValue).map(
                              (suggestion, index) =>
                                renderSuggestion({
                                  suggestion,
                                  index,
                                  itemProps: getItemProps({
                                    item: suggestion.label
                                  }),
                                  highlightedIndex,
                                  selectedItem
                                })
                            )}
                          </Paper>
                        </div>
                      </Popper>
                    </div>
                  )}
                </Downshift>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Opis dodatkowy"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Odpowiednik" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pojemność"
                  type="number"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="outlined">
              Zapisz
            </Button>
            <Button variant="outlined">Anuluj</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  );
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) {
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

export default Create;

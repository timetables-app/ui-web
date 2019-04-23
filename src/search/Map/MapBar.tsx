import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Tooltip
} from '@material-ui/core';
import { Place } from '@material-ui/icons';
import { DateTimePicker } from 'material-ui-pickers';
import React, { FunctionComponent } from 'react';
import { PlacePoint } from './types';

const MapBar: FunctionComponent<Props> = ({
  source,
  destination,
  departureTime,
  setDepartureTime
}) => {
  return (
    <Grid container style={{ padding: '16px 16px 24px 16px' }} spacing={24}>
      <Grid item xs={12} sm={6} md={3}>
        <Tooltip title="Naciśnij znacznik na mapie">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Place color="primary" />
                </InputAdornment>
              )
            }}
            value={source ? source.name : 'Wybierz na mapie'}
            label="Skąd"
            variant="outlined"
            disabled
            fullWidth
          />
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Tooltip title="Naciśnij znacznik na mapie">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Place color="secondary" />
                </InputAdornment>
              )
            }}
            value={destination ? destination.name : 'Wybierz na mapie'}
            label="Dokąd"
            variant="outlined"
            disabled
            fullWidth
          />
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <DateTimePicker
          ampm={false}
          value={departureTime}
          disablePast
          onChange={setDepartureTime}
          label="Czas odjazdu"
          variant="outlined"
          showTodayButton
          fullWidth
        />
      </Grid>
      <Grid item style={{ display: 'flex' }} xs={12} sm={6} md={2}>
        <Button
          variant="outlined"
          color="primary"
          disabled={!(source && destination && departureTime)}
        >
          Szukaj
        </Button>
      </Grid>
    </Grid>
  );
};

interface Props {
  source?: PlacePoint;
  destination?: PlacePoint;
  departureTime: Date;
  setDepartureTime: (d: Date) => void;
}

export default MapBar;

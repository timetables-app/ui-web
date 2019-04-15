import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import React from 'react';
import Autocomplete from '../../../Autocomplete';

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
                <Autocomplete />
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

export default Create;

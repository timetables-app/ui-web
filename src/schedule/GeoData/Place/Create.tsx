import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import * as React from 'react';

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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Szerokość geog."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Długość geog." />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Miejscowość" />
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
                <TextField variant="outlined" fullWidth label="Pojemność" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Create;

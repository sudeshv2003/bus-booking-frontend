import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  const handleSearch = () => {
  };

  return (
    
    <div className={classes.root}>
        <NavigationBar/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Search Bus</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="departure"
                    label="Departure"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="destination"
                    label="Destination"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="date"
                    label="Date of Departure"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Link to="/buses" className='nav-Link'>Search</Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
import React from 'react';
import {
  MuiThemeProvider as ThemeProvider,
  rgbToHex,
} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

import Balance from './Balance';
import Transaction from './Transaction';
import History from './History';
import './css/App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(226, 105, 88)',
    },
    secondary: {
      main: 'rgb(66, 171, 219)',
    },
  },
});

const useStyles = makeStyles({
  appContainer: {
    backgroundColor: 'rgb(233,233,233)',
    height: '100%',
    '@media(min-width: 600px)': {
      width: '80%',
      height: '80%',
      margin: 'auto',
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container className={classes.appContainer}>
          <Grid item xs={12} md={4}>
            <Balance />
          </Grid>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <Transaction />
            </Grid>
            <Grid item xs={12}>
              <History />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;

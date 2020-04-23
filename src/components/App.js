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
      contrastText: 'rgb(236, 236, 236)',
    },
    secondary: {
      main: 'rgb(56, 136, 173)',
      contrastText: 'rgb(236, 236, 236)',
    },
  },
});

const useStyles = makeStyles({
  appContainer: {
    backgroundColor: 'rgb(53, 53, 53)',
    minHeight: '100vh',
    width: '100vw',
    padding: '0 18px',
    '@media(min-width: 960px)': {
      width: '80vw',
      minHeight: '80vh',
      margin: '0 auto',
      boxShadow: '0 0 18px 12px rgba(121,121,121,0.67)',
      '& .transactionSection': {
        minHeight: '38%',
      },
      '& .historySection': {
        minHeight: '62%',
      },
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
            <Grid item xs={12} className="transactionSection">
              <Transaction />
            </Grid>
            <Grid item xs={12} className="historySection">
              <History />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;

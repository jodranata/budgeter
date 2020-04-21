import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BUDGETTYPE } from './constants';

const useStyles = makeStyles({
  MuiBalance: {
    textAlign: 'center',
    color: 'rgb(241,241,241)',
    width: '100%',
    '& > *': {
      padding: '10px 0',
      '@media(min-width: 600px)': {
        padding: '20px 0',
      },
    },
    '& .appTitle': {
      textAlign: 'center',
      fontSize: '2.3rem',
    },
    '& .balance': {
      fontSize: '1.8rem',
    },
    '& .budget': {
      fontSize: '1.4rem',
    },
    '& .MuiGrid-item:nth-child(3)': {
      '@media(min-width: 600px)': {
        marginTop: '35px',
      },
    },
  },
  'MuiFlex-colcenter': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      padding: '3px 0',
    },
  },
});

const Balance = () => {
  const classes = useStyles();
  const budgets = BUDGETTYPE.map(({ type, op }) => {
    const colorType = type === 'income' ? 'secondary' : 'primary';
    return (
      <Grid
        key={op}
        item
        xs={12}
        sm={6}
        className={classes['MuiFlex-colcenter']}
      >
        <Typography
          className={`budget budgetText ${type}Text`}
          color={colorType}
        >
          {`Your ${type}`}
        </Typography>
        <Typography
          color={colorType}
          className={`budget budgetNominal ${type}Nominal`}
        >
          {`${op}0.00`}
        </Typography>
      </Grid>
    );
  });

  return (
    <Grid container className={classes.MuiBalance}>
      <Grid item xs={12}>
        <h1 className="appTitle">Budget App</h1>
      </Grid>
      <Grid item xs={12}>
        <div className={classes['MuiFlex-colcenter']}>
          <span className="balance balanceText">Your Balance</span>
          <span className="balance balanceNumber">0.00</span>
        </div>
      </Grid>
      <Grid container item xs={12}>
        {budgets}
      </Grid>
    </Grid>
  );
};

export default Balance;

import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../Context/state';
import { BUDGETTYPE } from './constants';

const useStyles = makeStyles({
  MuiBalance: {
    textAlign: 'center',
    color: 'rgb(241,241,241)',
    width: '100%',
    maxHeight: '100%',
    '& > *': {
      padding: '10px 0',
      '@media(min-width: 600px)': {
        padding: '20px 0',
      },
    },
    '& .appTitle': {
      textAlign: 'center',
      fontSize: '2.3rem',
      marginBottom: '0',
      textTransform: 'uppercase',
      '& + *': {
        color: 'rgb(195,195,195)',
      },
    },
    '& .balance': {
      fontSize: '1.8rem',
      wordWrap: 'break-word',
    },
    '& .budget': {
      fontSize: '1.4rem',
      textTransform: 'capitalize',
      wordWrap: 'break-word',
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
  const {
    state: { incomes, expenses },
  } = useContext(GlobalContext);
  const currency = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  });
  const totalIncomes = incomes.map(({ nominal }) => nominal).reduce((a, b) => a + b, 0);
  const totalExpenses = expenses.map(({ nominal }) => nominal).reduce((a, b) => a + b, 0);
  const totalBalance = currency.format(totalIncomes - totalExpenses);

  const currIncome = `+${currency.format(totalIncomes)}`;
  const currExpenses = `-${currency.format(totalExpenses)}`;

  const budgets = BUDGETTYPE.map(({ type, op }) => {
    const colorType = type === 'income' ? 'secondary' : 'primary';
    return (
      <Grid
        key={op}
        item
        xs={12}
        sm={6}
        className={classes['MuiFlex-colcenter']}
        wrap="nowrap"
      >
        <Typography className={`budget budgetText ${type}Text`} color={colorType}>
          {`Your Total ${type}`}
        </Typography>
        <Typography color={colorType} className={`budget budgetNominal ${type}Nominal`}>
          {`${type === 'income' ? currIncome : currExpenses}`}
        </Typography>
      </Grid>
    );
  });

  return (
    <Grid container className={classes.MuiBalance}>
      <Grid item xs={12}>
        <h1 className="appTitle">Budgetter</h1>
        <Typography variant="subtitle2">Your personal budget tracker</Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes['MuiFlex-colcenter']}>
          <span className="balance balanceText">Your Balance</span>
          <span className="balance balanceNumber">{totalBalance}</span>
        </div>
      </Grid>
      <Grid container item xs={12}>
        {budgets}
      </Grid>
    </Grid>
  );
};

export default Balance;

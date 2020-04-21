import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TransactionField from './MuiComponents/TransactionField';

import { BUDGETTYPE } from './constants';

const useStyles = makeStyles({
  fieldContainer: {
    marginTop: '24px',
    '& .button-transaction': {
      '@media(max-width: 960px)': {
        justifyContent: 'center',
      },
    },

    '& > *': {
      margin: '5px auto',
    },
  },
  numField: {
    '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },
  },
});

const Transaction = () => {
  const classes = useStyles();
  const transactionType = BUDGETTYPE.map(({ type, op }) => {
    const colorType = type === 'income' ? 'secondary' : 'primary';
    const labelType = type === 'income' ? 'Income' : 'Expense';
    return (
      <Grid item sm={6}>
        <form noValidate autoComplete="off">
          <Grid container item className={classes.fieldContainer}>
            <Grid item xs={12}>
              <TransactionField
                color={colorType}
                type="number"
                label={`Add ${labelType}`}
                className={classes.numField}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TransactionField
                color={colorType}
                type="text"
                label={`${labelType} detail`}
                fullWidth
                className={classes.numField}
              />
            </Grid>
            <Grid item container xs={12} className="button-transaction">
              <Button variant="contained" color={colorType} type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  });
  return (
    <Grid container spacing={4}>
      {transactionType}
    </Grid>
  );
};

export default Transaction;

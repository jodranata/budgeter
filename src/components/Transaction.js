import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TransactionField from './MuiComponents/TransactionField';

import { BUDGETTYPE } from './constants';
import { GlobalContext } from '../Context/state';

const generateID = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const useStyles = makeStyles({
  fieldContainer: {
    marginTop: '24px',
    '& .button-transaction': {
      '@media(max-width: 960px)': {
        justifyContent: 'center',
      },
    },
    '& .MuiFormHelperText-root': {
      opacity: '0',
      '&.Mui-error': {
        opacity: 1,
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

  const { addExpenseActions, addIncomeActions } = useContext(GlobalContext);

  const [incomeNominal, setIncomeNominal] = useState('');
  const [expenseNominal, setExpenseNominal] = useState('');
  const [incomeDetail, setIncomeDetail] = useState('');
  const [expenseDetail, setExpenseDetail] = useState('');

  const [expenseError, setExpenseError] = useState({
    nominal: false,
    detail: false,
  });

  const [incomeError, setIncomeError] = useState({
    nominal: false,
    detail: false,
  });

  const handleError = (id, data) => {
    const isIncomeForm = id === 'IncomeForm';
    const { nominal, details } = data;
    if (isIncomeForm) {
      return setIncomeError({
        nominal: !nominal,
        detail: !details.trim(),
      });
    }
    return setExpenseError({
      nominal: !nominal,
      detail: !details.trim(),
    });
  };

  const clearErrors = form => {
    if (form === 'IncomeForm')
      return setIncomeError({
        nominal: false,
        detail: false,
      });
    return setExpenseError({
      nominal: false,
      detail: false,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      target: { id },
    } = e;

    const isIncomeForm = id === 'IncomeForm';

    const data = {
      nominal: isIncomeForm ? Number(incomeNominal) : Number(expenseNominal),
      details: isIncomeForm ? incomeDetail : expenseDetail,
      type: isIncomeForm ? '+' : '-',
      transactionId: generateID(1000000000, 8999999999),
    };

    if (!data.nominal || !data.details || !data.details.trim())
      return handleError(id, data);

    if (isIncomeForm) {
      addIncomeActions(data);
      setIncomeDetail('');
      setIncomeNominal('');
      clearErrors('IncomeForm');
    } else {
      addExpenseActions(data);
      setExpenseDetail('');
      setExpenseNominal('');
      clearErrors('ExpenseForm');
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const {
      target: { type, value, id },
    } = e;

    if (type === 'number') {
      if (id === 'IncomeNominal') setIncomeNominal(value);
      else setExpenseNominal(value);
    } else if (id === 'IncomeDetail') setIncomeDetail(value);
    else setExpenseDetail(value);
  };

  const transactionType = BUDGETTYPE.map(({ type, op }) => {
    const colorType = type === 'income' ? 'secondary' : 'primary';
    const labelType = type === 'income' ? 'Income' : 'Expense';
    return (
      <Grid item sm={6} key={op}>
        <form
          noValidate
          autoComplete="off"
          id={`${labelType}Form`}
          onSubmit={handleSubmit}
        >
          <Grid container item className={classes.fieldContainer}>
            <Grid item xs={12}>
              <TransactionField
                color={colorType}
                id={`${labelType}Nominal`}
                type="number"
                label={`Add ${labelType}`}
                className={classes.numField}
                value={type === 'income' ? incomeNominal : expenseNominal}
                fullWidth
                error={
                  labelType === 'Income' ? !!incomeError.nominal : !!expenseError.nominal
                }
                helperText={
                  incomeError.nominal || expenseError.nominal
                    ? `Please fill in the field`
                    : ''
                }
                placeholder="0"
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TransactionField
                color={colorType}
                id={`${labelType}Detail`}
                type="text"
                label={`${labelType} Detail`}
                value={type === 'income' ? incomeDetail : expenseDetail}
                error={
                  labelType === 'Income' ? !!incomeError.detail : !!expenseError.detail
                }
                helperText={
                  incomeError.detail || expenseError.detail
                    ? 'Please fill in the field'
                    : ''
                }
                fullWidth
                className={classes.numField}
                onChange={handleChange}
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

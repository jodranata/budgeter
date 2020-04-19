import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import { BUDGETTYPE } from './constants';

const isNumber = (num) => {};

const TransactionType = BUDGETTYPE.map(({ type, op }) => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          color={type === 'income' ? 'secondary' : 'primary'}
          label={`Add ${type === 'income' ? 'Income' : 'Expenses'}`}
        />
        <Button
          variant="outlined"
          color={type === 'income' ? 'secondary' : 'primary'}
          type="Submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
});

const Transaction = () => {
  return <>{TransactionType}</>;
};

export default Transaction;

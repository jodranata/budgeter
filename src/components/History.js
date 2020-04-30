import React, { Fragment, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { GlobalContext } from '../Context/state';
import HistoryBar from './HistoryBar';

const useStyles = makeStyles({
  historyDetail: {
    color: 'rgb(231,231,231)',
    '& > *': {
      padding: '7px',
    },
    '&  .MuiTypography-root': {
      fontSize: '1.2rem',
      marginBottom: '14px',
    },
    '& .historyContainer': {
      overflowY: 'auto',
      maxHeight: '350px',
      '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#11171a',
        borderRadius: '10px',
      },
    },
  },
});

const HistoryChip = ({ historyData, removeTransactionAction }) =>
  historyData.map(({ type, nominal, details, transactionId }) => {
    const colorType = type === '+' ? 'secondary' : 'primary';

    const onDeleteTransaction = (budgetType, id) => {
      return removeTransactionAction(budgetType, id);
    };

    return (
      <Fragment key={transactionId}>
        <HistoryBar
          deleteIcon="deleteIcon"
          onDeleteTransaction={() => onDeleteTransaction(type, transactionId)}
          nominal={nominal}
          detail={details}
          bgColor={colorType}
          transactionId={transactionId}
        />
      </Fragment>
    );
  });

const History = () => {
  const classes = useStyles();
  const { state, removeTransactionAction } = useContext(GlobalContext);
  const { incomes, expenses } = state;

  return (
    <Grid container className={classes.historyDetail}>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Incomes History
        </Typography>
        <div className="historyContainer">
          {incomes && (
            <HistoryChip
              historyData={incomes}
              removeTransactionAction={removeTransactionAction}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Expenses History
        </Typography>
        <div className="historyContainer">
          {expenses && (
            <HistoryChip
              historyData={expenses}
              removeTransactionAction={removeTransactionAction}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default History;

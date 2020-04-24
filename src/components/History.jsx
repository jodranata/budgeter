import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HistoryBar from './HistoryBar';

const incomeHistory = [
  {
    type: '+',
    nominal: '11000',
    detail: `groceries`,
  },
];

const expenseHistory = [
  {
    type: '-',
    nominal: '11000',
    detail: `groceries`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
  {
    type: '-',
    nominal: '30000',
    detail: `car loan`,
  },
];

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

const onDeleteHis = () => {};

const HistoryChip = ({ historyData }) =>
  historyData.map(({ type, nominal, detail }, idx) => {
    const colorType = type === '+' ? 'secondary' : 'primary';
    return (
      <Fragment key={idx}>
        <HistoryBar
          deleteIcon="deleteIcon"
          onDeleteHis="onDeleteHis"
          nominal={nominal}
          detail={detail}
          bgColor={colorType}
        />
      </Fragment>
    );
  });

const History = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.historyDetail}>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Incomes History
        </Typography>
        <div className="historyContainer">
          {incomeHistory && <HistoryChip historyData={incomeHistory} />}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Expenses History
        </Typography>
        <div className="historyContainer">
          {expenseHistory && <HistoryChip historyData={expenseHistory} />}
        </div>
      </Grid>
    </Grid>
  );
};

export default History;

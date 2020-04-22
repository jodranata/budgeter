import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HistoryBar from './HistoryBar';

const incomeHistory = [
  {
    type: '+',
    nominal: '60000',
    detail: `march's pay`,
  },
  {
    type: '+',
    nominal: '15000',
    detail: `Blog's ad`,
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
];

const useStyles = makeStyles({
  historyDetail: {
    color: 'rgb(231,231,231)',
    height: '100%',
    '& > *': {
      padding: '7px',
    },
    '&  .MuiTypography-root': {
      fontSize: '1.2rem',
      marginBottom: '14px',
    },
  },
});

const onDeleteHis = () => {};

const HistoryChip = ({ historyData }) =>
  historyData.map(({ type, nominal, detail }) => {
    const colorType = type === '+' ? 'secondary' : 'primary';
    return (
      <>
        <HistoryBar
          deleteIcon="deleteIcon"
          onDeleteHis="onDeleteHis"
          nominal={nominal}
          detail={detail}
          bgColor={colorType}
        />
      </>
    );
  });

const History = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.historyDetail}>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Income History
        </Typography>
        <HistoryChip historyData={incomeHistory} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="center" color="inherit">
          Outcome History
        </Typography>
        <HistoryChip historyData={expenseHistory} />
      </Grid>
    </Grid>
  );
};

export default History;

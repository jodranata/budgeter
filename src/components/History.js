import React from 'react';
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const historyTransType = [
  {
    type: 'income',
    value: 60000,
    op: '+',
  },
  {
    type: 'expense',
    value: 21000,
    op: '-',
  },
];

const onDeleteHis = () => {};

const historyChip = historyTransType.map(({ type, op, value }) => {
  const colorType = op === '+' ? 'secondary' : 'primary';
  return (
    <Grid item xs={12} sm={6} key={op}>
      <Typography color={colorType} variant="body1">
        {`${type} History`}
      </Typography>
      <Chip
        color={colorType}
        deleteIcon={<DoneIcon />}
        onDelete={onDeleteHis}
        label={`${type} ${value}`}
      />
    </Grid>
  );
});

const History = () => {
  return <Grid container>{historyChip}</Grid>;
};

export default History;

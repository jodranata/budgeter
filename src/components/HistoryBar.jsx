import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

import { themeBgColor } from './MuiComponents/MuiStyles';

const useStyles = makeStyles({
  historyBarContainer: {
    '& .historyDetail': {
      textAlign: 'left',
      marginLeft: '8px',
    },
    '& .historySpan': {
      width: '100%',
      fontWeight: '700',
      textTransform: 'capitalize',
    },
    '& .historyNominal': {
      textAlign: 'right',
      marginRight: '8px',
    },
    '& > *': {
      padding: '2px',
      margin: '5px 0',
      '& .MuiFab-root': {
        width: '35px',
        height: '35px',
      },
    },
  },
});

const HistoryBar = (props) => {
  const themeClasses = themeBgColor();
  const historyClasses = useStyles();
  const { onDeleteHis, nominal, detail, bgColor } = props;
  const bgType =
    bgColor === 'primary'
      ? themeClasses.primaryBgColor
      : themeClasses.secondaryBgColor;
  return (
    <Grid
      container
      item
      className={historyClasses.historyBarContainer}
      justify="space-around"
    >
      <Grid container item xs={9} className={bgType} alignItems="center">
        <Grid item container xs={8}>
          <span className="historySpan historyDetail">{detail}</span>
        </Grid>
        <Grid item container xs={4}>
          <span className="historySpan historyNominal">{`$${nominal}`}</span>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Fab color="primary" aria-label="delete">
          <DeleteIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default HistoryBar;

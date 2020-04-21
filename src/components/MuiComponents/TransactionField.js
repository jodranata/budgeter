import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const TransactionField = withStyles({
  root: {
    '& label, .MuiInputBase-input, .MuiInputAdornment-root.MuiInputAdornment-positionStart > p': {
      color: 'rgb(231,231,231)',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'rgb(241, 241, 241)',
    },

    '& .MuiInput-underline:hover:before': {
      borderBottom: '2px solid rgba(248,248,248,0.873)',
    },
  },
})(TextField);

export default TransactionField;

import makeStyles from '@material-ui/core/styles/makeStyles';

export const themeBgColor = makeStyles((theme) => ({
  primaryBgColor: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryBgColor: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

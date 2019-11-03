import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
  },
  span: {
    fontWeight: 'bold',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  searchbar: {
    textAlign: 'left',
  },
  searchbarSubmitBtn: {
    display: 'block',
  },
}));

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    border: '1px solid lightgrey',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
  },
  spanKey: {
    fontWeight: 'bold',
  },
  span: {
    fontWeight: 'bold',
  },
  detailGridContianer: {
    marginBottom: theme.spacing(2),
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  searchbar: {
    textAlign: 'left',
    border: '1px solid lightgrey',
  },
  searchbarSubmitBtn: {
    display: 'block',
  },
}));

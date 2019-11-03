import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  CardHeader,
  Grid,
} from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { CustomerStatus } from 'Customer/types';
import React, { useCallback, useState } from 'react';

interface IStatus {
  name: string;
}

interface ITextFieldItem {
  label: string;
  className: string;
  data: any;
}

function useInputValue(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((event) => {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange,
  };
}

const renderStatusCheckboxes = (
  statusList: IStatus[],
  onChange: (e: any) => void,
) => {
  return (
    <>
      {statusList.map((s, i) => {
        return (
          <FormControlLabel
            control={<Checkbox name={s.name} onChange={onChange} />}
            label={s.name}
            key={i}
          />
        );
      })}
    </>
  );
};

const renderTextInputs = (items: ITextFieldItem[]) => {
  return (
    <>
      {items.map((i) => {
        return (
          <TextField
            label={i.label}
            type="search"
            className={i.className}
            margin="normal"
            variant="outlined"
            {...i.data}
            key={i.label}
          />
        );
      })}
    </>
  );
};

const CustomerListSearchBar = ({ onClickSearch }: any) => {
  const name = useInputValue('');
  const email = useInputValue('');
  const [checkedStatus, setCheckedStatus] = useState(new Map());

  const classes = useStyles();

  const textFields = [
    { label: 'email', className: classes.textField, data: email },
    { label: 'name', className: classes.textField, data: name },
  ];

  const handleOnClickSearch = useCallback(
    (e) => {
      e.preventDefault();
      onClickSearch({
        name: name.value,
        email: email.value,
        status: [...checkedStatus]
          .filter(([_, v]) => !!v)
          .map(([k]) => {
            return k;
          }),
      });
    },
    [name, email, checkedStatus, onClickSearch],
  );

  const handleChangeCheckbox = useCallback(
    (e) => {
      checkedStatus.set(e.target.name, e.target.checked);
      setCheckedStatus(checkedStatus);
    },
    [checkedStatus, setCheckedStatus],
  );

  const statusList = Object.values(CustomerStatus).map((s) => ({
    name: s,
  }));

  return (
    <>
      <Card className={classes.searchbar}>
        <CardHeader title={'search bar'}></CardHeader>
        <CardContent>
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend">status</FormLabel>
              <FormGroup>
                {renderStatusCheckboxes(statusList, handleChangeCheckbox)}
              </FormGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormGroup>{renderTextInputs(textFields)}</FormGroup>
            </FormControl>

            <FormControl className={classes.searchbarSubmitBtn}>
              <Grid item xs={4}>
                <FormGroup>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleOnClickSearch}
                  >
                    search
                  </Button>
                </FormGroup>
              </Grid>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomerListSearchBar;

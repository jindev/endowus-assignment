import { Card, CardContent } from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { CustomerStatus } from 'Customer/types';
import { Stack } from 'office-ui-fabric-react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import React, { useCallback, useState } from 'react';

interface IStatus {
  name: string;
}

const renderStatusCheckboxes = (
  statusList: IStatus[],
  onChange: (e: any) => void,
) => {
  return (
    <>
      {statusList.map((s, i) => {
        return (
          <Checkbox label={s.name} onChange={onChange} name={s.name} key={i} />
        );
      })}
    </>
  );
};

const CustomerListSearchBar = ({ onClickSearch }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [checkedStatus, setCheckedStatus] = useState(new Map());

  const classes = useStyles();

  const handleOnClickSearch = useCallback(
    (newData?: any) => {
      onClickSearch({
        name,
        email,
        status: [...checkedStatus]
          .filter(([_, v]) => !!v)
          .map(([k]) => {
            return k;
          }),
        ...newData,
      });
    },
    [onClickSearch, checkedStatus, name, email],
  );

  const handleOnChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      handleOnClickSearch({ email: e.target.value });
    },
    [setEmail, handleOnClickSearch],
  );

  const handleOnChangeName = useCallback(
    (e) => {
      setName(e.target.value);
      handleOnClickSearch({ name: e.target.value });
    },
    [setName, handleOnClickSearch],
  );

  const handleChangeCheckbox = useCallback(
    (e) => {
      checkedStatus.set(e.target.name, e.target.checked);
      setCheckedStatus(checkedStatus);
      handleOnClickSearch();
    },
    [checkedStatus, setCheckedStatus, handleOnClickSearch],
  );

  const statusList = Object.values(CustomerStatus).map((s) => ({
    name: s,
  }));

  return (
    <>
      <Card className={classes.searchbar}>
        <CardContent>
          <Label>status</Label>
          <Stack horizontal tokens={{ childrenGap: 10, padding: 15 }}>
            {renderStatusCheckboxes(statusList, handleChangeCheckbox)}
          </Stack>
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <TextField
              label="email"
              value={email}
              onChange={handleOnChangeEmail}
              key="email"
            />
            <TextField
              label="name"
              value={name}
              onChange={handleOnChangeName}
              key="name"
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomerListSearchBar;

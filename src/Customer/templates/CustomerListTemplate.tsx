import MaterialTable from 'material-table';
import React, { useMemo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { ICustomer, IPersonalDetails } from '../types';

export type ICustomerForList = Pick<
  ICustomer,
  'id' | 'status' | 'email' | 'createdAt'
> &
  Pick<IPersonalDetails, 'firstName' | 'lastName' | 'legalName'>;

const Table = ({ columns, data }: any) => {
  return (
    <MaterialTable
      columns={columns}
      data={data}
      title={''}
      options={{
        actionsColumnIndex: -1,
        search: false,
        headerStyle: {
          backgroundColor: 'lightgrey',
        },
      }}
      actions={[
        {
          icon: 'link',
          onClick: (e: any, rowData: any) => {
            window.location.href = `/customers/${rowData.id}`;
          },
        },
      ]}
    />
  );
};

interface ICustomerListTemplateProps extends RouteComponentProps {
  customers: ICustomerForList;
}

const CustomerListTemplate: React.FC<ICustomerListTemplateProps> = ({
  customers,
}) => {
  const columns = useMemo(
    () => [
      {
        title: 'id',
        field: 'id',
      },
      {
        title: 'status',
        field: 'status',
      },
      {
        title: 'email',
        field: 'email',
      },
      {
        title: 'firstName',
        field: 'personalDetails.firstName',
      },
      {
        title: 'lastName',
        field: 'personalDetails.lastName',
      },
      {
        title: 'legalName',
        field: 'personalDetails.legalName',
      },
    ],
    [],
  );
  return (
    <>
      <Table columns={columns} data={customers}></Table>
    </>
  );
};

export default withRouter(CustomerListTemplate);

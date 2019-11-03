import { getApi } from 'App/services/api';

import { ICustomer } from './types';

const GET_CUSTOMER_URL = '/data/customers.json';

export const fetchCustomers = (params: any = {}) =>
  getApi<ICustomer[]>(GET_CUSTOMER_URL).then((data) => {
    let results = data;

    if (params.email) {
      results = results.filter((d) =>
        d.email.toLowerCase().includes(params.email.toLowerCase()),
      );
    }

    if (params.name) {
      results = results.filter((d) => {
        if (d.personalDetails) {
          const { firstName, lastName, legalName } = d.personalDetails;
          const matchName = [firstName, lastName, legalName].some((name) =>
            name.toLowerCase().includes(params.name.toLowerCase()),
          );
          return matchName;
        }
        return false;
      });
    }

    if (params.status && params.status.length > 0) {
      results = results.filter((d) => {
        return params.status.includes(d.status);
      });
    }

    return results;
  });

export const fetchCustomerDetail = ({ id }: { id: string }) =>
  getApi<ICustomer[]>(GET_CUSTOMER_URL).then(
    (customers) => customers.filter((c) => c.id === id)[0],
  );

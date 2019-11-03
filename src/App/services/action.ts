export enum RequestTypes {
  REQUEST = 'Request',
  SUCCESS = 'Success',
  FAILURE = 'Failure',
}

export interface IEntity {
  request: () => any;
  success: (result: any) => any;
  failure: (error: any) => any;
}

export const createRequestTypes = (domain: string) =>
  Object.values(RequestTypes).reduce(
    (acc, type) => {
      acc[`${domain}${type}`] = ['payload'];
      return acc;
    },
    {} as any,
  );

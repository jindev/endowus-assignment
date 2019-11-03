import { Gender } from 'App/types';

export interface IPersonalDetails {
  firstName: string;
  lastName: string;
  legalName: string;
  gender: Gender;
  dob: Date;
  nationality: string;
  [k: string]: any;
}

export interface IPhoneDetails {
  countryCode: number;
  number: number;
}

export interface ICustomer {
  id: string;
  status: CustomerStatus;
  createdAt: string;
  email: string;
  personalDetails?: IPersonalDetails;
  phoneDetails?: IPhoneDetails;
  [k: string]: any;
}

export enum CustomerStatus {
  REGISTERING = 'REGISTERING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

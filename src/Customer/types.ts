import { Gender } from 'App/types';

export type Customer = {
  id: string;
  status: CustomerStatus;
  createdAt: string;
  email: string;
  personalDetails?: {
    firstName: string;
    lastName: string;
    legalName: string;
    gender: Gender;
    dob: Date;
    nationality: string;
  };
  phoneDetails?: {
    countryCode: number;
    number: number;
  };
};

export enum CustomerStatus {
  REGISTERING = 'REGISTERING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

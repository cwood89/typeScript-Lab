export interface PersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  city?: string;
  state?: string;
  zipCode?: number;
  occupation?: string;
  wage?: number;
  certs?: string[];

  createPerson(): Person;
}
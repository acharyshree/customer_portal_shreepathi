
import { faker } from '@faker-js/faker/locale/de'

import { CustomerInterface } from './Interfaces';


export const generateDummyCustomers = (): CustomerInterface[] => {

  const dummyCustomers: CustomerInterface[] = [];
  for (let i = 1; i <= 1000; i++) {

    const addressLines = [];
    for (let j = 0; j < 4; j++) {
      addressLines.push(faker.address.streetAddress());
    }

    dummyCustomers.push({
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      address: addressLines.join('\n'),
    });
  }
  return dummyCustomers;
};

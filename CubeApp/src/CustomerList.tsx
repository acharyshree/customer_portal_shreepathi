
import React, { useState } from 'react';
import { CustomerInterface } from './Interfaces';
import CustomerRightCard from './CustomerRightCard.tsx';
import CustomerDetails from './CustomerDetails';

interface CustomerListProps {
  customers: CustomerInterface[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }): JSX.Element => {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerInterface>(customers[0]);

  const handleCustomerSelection = (customer: CustomerInterface) => {
    setSelectedCustomer(customer);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          {customers.map((cu,index) => (
            <CustomerRightCard
              key={index}
              customer={cu}
              onSelectCustomer={handleCustomerSelection}
              isSelected={selectedCustomer !== null && selectedCustomer.name === cu.name}
            />
          ))}
        </div>
        {selectedCustomer && (
          <div>
            <CustomerDetails customer={selectedCustomer} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;

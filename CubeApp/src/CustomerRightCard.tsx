

import React from 'react';
import { CustomerInterface } from './Interfaces';

interface CustomerCardProps {
  customer: CustomerInterface;
  onSelectCustomer: (customer: CustomerInterface) => void;
  isSelected: boolean;
}

const CustomerRightCard: React.FC<CustomerCardProps> = ({ customer, onSelectCustomer, isSelected }) => {
  const cardStyle = {
    width: "25rem",
    height: "25vh",
    border: "1px solid black",
    backgroundColor: isSelected ? "grey" : "transparent",
    cursor: "pointer"
  };

  return (
    <div style={cardStyle} onClick={() => onSelectCustomer(customer)}>
      <div style={{ margin: "3px" }}>
        <h3>{customer.name}</h3>
        <p>{customer.title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae maxime accusamus optio delectus distinctio adipisci sint tempora unde consectetur....
        </p>
      </div>
    </div>
  );
};

export default CustomerRightCard;

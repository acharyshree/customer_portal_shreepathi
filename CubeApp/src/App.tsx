import React from 'react';
import { generateDummyCustomers } from './Customers';
// import { CustomerInterface } from './Interfaces';
import CustomerList from './CustomerList';
// import CustomerDetails from './CustomerDetails';

const App: React.FC = () => {
  
  let dummyCustomers = generateDummyCustomers();  

  return (
    <div className="app-container">
      <div>
        <CustomerList customers={dummyCustomers} />
     
      </div>
    </div>
  );
};

export default App;


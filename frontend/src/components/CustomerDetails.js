// components/CustomerDetails.js
import React, { useEffect, useState } from 'react';
import { getCustomerById } from '../services/customerService';

const CustomerDetails = ({ match }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const result = await getCustomerById(match.params.id);
    setCustomer(result.data);
  };

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Date of Birth: {new Date(customer.dob).toLocaleDateString()}</p>
      <p>Gender: {customer.gender}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <p>Address: {customer.address}</p>
      <p>Company: {customer.company}</p>
      <p>Property Code: {customer.propertyCode}</p>
      <p>Rental Date: {new Date(customer.rentalDate).toLocaleDateString()}</p>
      <p>Has Paid: {customer.hasPaid ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default CustomerDetails;
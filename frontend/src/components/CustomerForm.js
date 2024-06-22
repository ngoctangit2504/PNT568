// components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import { createCustomer, getCustomerById, updateCustomer } from '../services/customerService';

const CustomerForm = ({ match, history }) => {
  const [customer, setCustomer] = useState({
    name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    propertyCode: '',
    rentalDate: '',
    hasPaid: false
  });

  useEffect(() => {
    if (match.params.id) {
      loadCustomer();
    }
  }, [match.params.id]);

  const loadCustomer = async () => {
    const result = await getCustomerById(match.params.id);
    setCustomer(result.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (match.params.id) {
      await updateCustomer(match.params.id, customer);
    } else {
      await createCustomer(customer);
    }
    history.push('/');
  };

  return (
    <div>
      <h2>{match.params.id ? 'Edit Customer' : 'Add Customer'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Name" required />
        <input type="date" name="dob" value={customer.dob} onChange={handleChange} placeholder="Date of Birth" required />
        <select name="gender" value={customer.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Chưa xác định">Chưa xác định</option>
        </select>
        <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={customer.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="text" name="address" value={customer.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="company" value={customer.company} onChange={handleChange} placeholder="Company" required />
        <input type="text" name="propertyCode" value={customer.propertyCode} onChange={handleChange} placeholder="Property Code" required />
        <input type="date" name="rentalDate" value={customer.rentalDate} onChange={handleChange} placeholder="Rental Date" required />
        <input type="checkbox" name="hasPaid" checked={customer.hasPaid} onChange={(e) => setCustomer({ ...customer, hasPaid: e.target.checked })} /> Has Paid
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerForm;
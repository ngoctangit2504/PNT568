import React, { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from '../services/customerService';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const result = await getCustomers();
    setCustomers(result.data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <div>
      <h2>Customer List</h2>
      <Link to="/customerForm"><button type="button" class="btn btn-primary">Thêm mới khách hàng</button></Link>
    
      <ul>
        {customers.map(customer => (
          <li key={customer._id}>
            {customer.name} - {customer.email}
            <button onClick={() => handleDelete(customer._id)}>Delete</button>
          </li>
        ))}
      </ul>


      <table class="table">
  <thead>
    <tr>
      <th colSpan={9}>Khách hàng</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Tên</th>
      <th scope="col">Giới tính</th>
      <th scope="col">Ngày sinh</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Tên công ty</th>
      <th scope="col">Tác vụ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default CustomerList;
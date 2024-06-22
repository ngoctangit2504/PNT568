const Customer = require('../models/Customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  // Get all customers
  exports.getCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).send(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  // Get a single customer by ID
  exports.getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) return res.status(404).send('Customer not found');
      res.status(200).send(customer);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  // Update a customer by ID
  exports.updateCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!customer) return res.status(404).send('Customer not found');
      res.status(200).send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  // Delete a customer by ID
  exports.deleteCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndDelete(req.params.id);
      if (!customer) return res.status(404).send('Customer not found');
      res.status(200).send('Customer deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  };
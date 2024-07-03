import React, { useState } from 'react';
import './ExpenseForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  var User = useSelector((state) => state.currentUserReducer);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      description,
      amount: parseFloat(amount),
      category,
      paymentMethod,
      userEmail: User.user.email
    };
    
    

    axios.post('https://expense-tracker-springboot-production.up.railway.app/track/', expenseData)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    setDescription('');
    setAmount('');
    setCategory('');
    setPaymentMethod('');
  };

  return (
    <>
    <div className="expense-form-container">
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="medical">Medical</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="" disabled>Select payment method</option>
            <option value="cash">Cash</option>
            <option value="credit_card">UPI</option>
            <option value="debit_card">Debit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default ExpenseForm;
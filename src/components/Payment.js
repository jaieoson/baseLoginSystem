import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PaymentPage = () => {
  const cart = useSelector(state => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = event => {
    event.preventDefault();
    // Process payment and complete order
  };

  return (
    <div>
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="credit-card"
            checked={paymentMethod === 'credit-card'}
            onChange={event => setPaymentMethod(event.target.value)}
          />
          Credit Card
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={event => setPaymentMethod(event.target.value)}
          />
          PayPal
        </label>
        <br />
        {paymentMethod === 'credit-card' && (
          <>
            <label>
              Card Number:
              <input type="text" />
            </label>
            <br />
            <label>
              Expiration Date:
              <input type="text" />
            </label>
            <br />
            <label>
              Security Code:
              <input type="text" />
            </label>
          </>
        )}
        {paymentMethod === 'paypal' && (
          <>
            <label>
              PayPal Email:
              <input type="email" />
            </label>
          </>
        )}
        <br />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Payment

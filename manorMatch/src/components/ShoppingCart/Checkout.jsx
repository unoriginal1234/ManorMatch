import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const billingDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: {
        line1: event.target.address.value,
        city: event.target.city.value,
        state: event.target.state.value,
        postal_code: event.target.zip.value,
      },
    };

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: billingDetails,
      },
    });

    if (error) {
      setPaymentError('Payment Failed');
    } else if (paymentIntent.status === 'succeeded') {
      setPaymentError(null);
      console.log('[PaymentIntent]', paymentIntent);
      // may add redirect to a success page)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="address" type="text" placeholder="Address" required />
      <input name="city" type="text" placeholder="City" required />
      <input name="state" type="text" placeholder="State" required />
      <input name="zip" type="text" placeholder="Zip" required />

      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && (
        <div>
          <p>{paymentError}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;

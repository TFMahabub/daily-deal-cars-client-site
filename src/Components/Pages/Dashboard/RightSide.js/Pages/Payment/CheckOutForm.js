import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ booking }) => {
  console.log(booking);
  
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [stripeClientSecret, setStripeClientSecret] = useState('')
  const navigate = useNavigate();
  
  // console.log(stripeClientSecret);
  const stripe = useStripe();
  const elements = useElements();
  
  const {meetingLocation, userEmail, reSellPrice, modelName, userName, BrandName, phone, _id} = booking;


  // console.log(booking);

  useEffect(() => {
    axios.post(`http://localhost:5000/payments/create-payment-intent`, {reSellPrice})
      .then(res => {
        console.log('34-', res?.data);
        if (res?.data?.success) {
          setStripeClientSecret(res?.data?.clientSecret);
          toast.success(`Payment successful for daily-deal-cars`)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [reSellPrice, BrandName, modelName])

  if (loading) {
    return <div className="w-10 h-10 border-4 border-dashed border-secondary rounded-full animate-spin"></div>
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message)
    } else {
      setError('')
    }


    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(stripeClientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail
          },
        },
      },
    );


    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent?.status === "succeeded") {

      const payment = {
        userName,
        reSellPrice,
        phone,
        userEmail,
        bookingId: _id,
        transactionId: paymentIntent?.id,
      }

      axios.post(`http://localhost:5000/payments`, payment)
        .then(res => {
          console.log('115', res.data);
          if (res?.data?.data?.insertedId) {
            toast.success(`Payment successful ${paymentIntent?.id}`)
            setSuccess('Congrats! your payment completed.')
            setTransactionId(paymentIntent?.id);
            // navigate('/dashboard/my-orders')
          }
        })
        .catch(err => console.log(err))

    }
    setProcessing(false);
  };



  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className='border border-primary p-2'
        />
        <p className='text-red-600'>{error}</p>
        <button
          className='btn btn-sm btn-primary mt-5'
          type="submit"
          disabled={!stripe || !stripeClientSecret || processing}
        >
          Pay
        </button>
      </form>
      {
        success && <div>
          <p className='text-green-600 font-medium'>{success}</p>
          <p className='font-semibold'>
            Your transactionID: <span className='font-bold'>{transactionId}</span>
          </p>
        </div>
      }
    </>
  );
};





export default CheckOutForm;
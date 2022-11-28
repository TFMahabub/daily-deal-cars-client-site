import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../../../../Sheared-Components/Spinner/Spinner';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';


const Payment = () => {
  const { id } =useParams()
  const stripe = loadStripe(process.env.REACT_APP_ATRIP_PUBLIC_KEY);
  console.log(process.env.REACT_APP_ATRIP_PUBLIC_KEY);

  const { data: booking, isLoading } = useQuery({
    queryKey: ['booking', id],
    queryFn: () => axios.get(`http://localhost:5000/booking/${id}`)
      .then(res => {
        const data = res?.data;
        return data
      })
      .catch(err => console.log(err))
  })
  return (
    <div>
      {
        isLoading?
        <Spinner></Spinner>
        :
        <section className='container flex justify-center px-6 md:px-6 lg:px-10 font-[Poppins] mt-10'>
      <div>
        <h1 className='text-2xl text-center font-bold pt-11'>Payment for {booking?.BrandName} {booking?.modelName}</h1>
        <p className='text-xl text-center font-semibold'>Total Price: ${booking?.reSellPrice}</p>
        <div className='w-96 mt-5 mb-10 '>
          <Elements stripe={stripe}>
            <CheckOutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </section>
      }
    </div>
  );
};

export default Payment;
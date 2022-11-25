import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import SingleCart from './SingleCart';

const Product = () => {
  const { user, loading } = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(true)
  const [selectedItem, setSelectedItem] = useState('')
  //get params query:
  const { id } = useParams()
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/categories/${id}`)
      const data = await res.json()
      return data;
    }
  })

  return (
    <section>
      {
        isLoading?
      <p>loading...</p>
      :
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 lg:gap-8'>
      {
        products.map(product=> 
          <SingleCart 
            key={product._id}
            product={product}
            setSelectedItem={setSelectedItem}
          />
          )
      }
      {
        openModal &&
        <BookingModal 
        user={user}
        selectedItem={selectedItem}
        >
        </BookingModal>
      }
      </div>
      }
    </section>
  );
};

export default Product;
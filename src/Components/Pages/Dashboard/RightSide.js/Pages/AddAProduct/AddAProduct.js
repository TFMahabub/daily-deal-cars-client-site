import React from 'react';
import { Form } from 'react-router-dom';
import AddProductForm from './AddProductForm';

const AddAProduct = () => {
  return (
    <div className='lg:col-span-5 '>
      <AddProductForm></AddProductForm>
    </div>
  );
};

export default AddAProduct;
import React, { useContext } from 'react';
import { DashboardContext } from '../../../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';
import FullWidthButton from '../../../../../../ReUseableComponents/Button/FullWidthButton';
import toast from 'react-hot-toast';

const AddProductForm = () => {
  const { dbUsers } = useContext(DashboardContext)

  const handleOnSubmit = e =>{
    e.preventDefault()

    const form = e.target;
    const userCategory = parseInt(form.userCategory.value);
    const brand = form.brandName.value;
    const name = form.modelName.value;
    const seller_name = dbUsers.name;
    const verification = 'not verified';
    const original_price = `$${form.original_price.value}`;
    const resale_price = `$${form.resale_price.value}`;
    const years_of_use = `${form.years_of_use.value} years`;
    const location = form.location.value;
    // const post_time = new Date()
    const img = form.img.value;

    const product = {
      userCategory,
      brand,
      name,
      seller_name,
      verification,
      original_price,
      resale_price,
      years_of_use,
      location,
      img
    }
    
    fetch('http://localhost:5000/categories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(result=>{
      if(result.status === 200){
        toast.success('Product added successfully')
        form.reset()
      }
      console.log(result)
    })
    
  }
  return (
    <section className='p-10'>
      <form onSubmit={handleOnSubmit} >
          <div className="grid grid-cols-1 gap-4 lg:gap-x-28 lg:grid-cols-2">
          <div>
            <label className="block dark:text-gray-400">Select user category</label>
            <select name="userCategory" required className='w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'>
              <option value="1">Electic Car</option>
              <option value="2">Luxury Car</option>
              <option value="3">Mcirobus</option>
            </select>
          </div>

            <div className="text-sm">
              <label className="block dark:text-gray-400">Brand Name:</label>
              <input
                type="text"
                name="brandName"
                required
                placeholder="Brand Name"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">Model Name:</label>
              <input
                type="text"
                name="modelName"
                required
                placeholder="Model Name"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">Your Name:</label>
              <input
                type="text"
                name="seller_name"
                disabled
                placeholder={dbUsers.name}
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">Original Price:</label>
              <input
                type="text"
                name="original_price"
                required
                placeholder="Original Price"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">Resale Price:</label>
              <input
                type="text"
                name="resale_price"
                required
                placeholder="Resale Price"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">How many year use:</label>
              <input
                type="text"
                name="years_of_use"
                required
                placeholder="How many year use"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">You Location:</label>
              <input
                type="text"
                name="location"
                required
                placeholder="Your Location"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400">Image Link:</label>
              <input
                type="text"
                name="img"
                required
                placeholder="Image Link"
                className="w-full ring-gray-400 ring-1 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          
          <FullWidthButton type="submit" extraClass={'mt-5'}>Login</FullWidthButton >
        </form>
    </section>
  );
};

export default AddProductForm;
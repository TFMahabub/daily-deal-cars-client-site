import React, { useContext } from 'react';
import { DashboardContext } from '../../../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';
import FullWidthButton from '../../../../../../ReUseableComponents/Button/FullWidthButton';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const { dbUsers } = useContext(DashboardContext)
  const navigate = useNavigate()
  const imageApi = process.env.REACT_APP_IMAGE_BB_API

  const handleOnSubmit = e =>{
    e.preventDefault()

    const form = e.target;
    const categories_id = parseInt(form.userCategory.value);
    const brand = form.brandName.value;
    const name = form.modelName.value;
    const seller_name = dbUsers.name;
    const seller_email = dbUsers.email;
    const verification = dbUsers.verification;
    const original_price = `$${form.original_price.value}`;
    const resale_price = `$${form.resale_price.value}`;
    const years_of_use = `${form.years_of_use.value} years`;
    const location = form.location.value;
    // const post_time = new Date()


    const uploadedImage = form.image.files[0];
    const formData = new FormData();
    formData.append('image', uploadedImage)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageApi}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(imgData=> {
      if(imgData.data.url){
        const product = {
          categories_id,
          brand,
          name,
          seller_name,
          seller_email,
          verification,
          original_price,
          resale_price,
          years_of_use,
          location,
          img: imgData.data.url,
        }
        postProduct(product)
      }
    })



    const postProduct = (product) =>{
      fetch('https://daily-deal-cars-server-site.vercel.app/categories', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          toast.success('Product added successfully')
          form.reset()
          navigate('/dashboard/my_products')
        }
      })
    }
    
  }
  return (
    <section className=''>
      <h2 className='text-center text-2xl font-semibold text-primary bg-slate-100 py-3'>Post your Product</h2>
      <form onSubmit={handleOnSubmit} className='mt-7 px-10'>
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
            <input type="file" name='image' accept="image/*" />
            </div>
          </div>
          
          <FullWidthButton type="submit" extraClass={'mt-5'}>Post</FullWidthButton >
        </form>
    </section>
  );
};

export default AddProductForm;
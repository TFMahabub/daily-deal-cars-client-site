import React from 'react';
import deleteFetch from '../fetch/DeleteMethod';
import toast from 'react-hot-toast';

const SingleBuyers = ({buyer, setRefetchdata}) => {
  const { name, email, _id } = buyer;

  const handleDelete = id =>{
    if(window.confirm("Do you want to delete the User?") === true){
      deleteFetch(id)
      .then(res=>{
        if(res.status === 200){
          toast.error('Seller delete successfully')
          setRefetchdata(true)
        }
      })
      .catch(err=>console.error(err))
    }
  }
  return (
      <tr className=''>
        <td className='font-semibold tracking-wide'>{name}</td>
        <td className='tracking-wide'>{email}</td>
        <button onClick={()=>handleDelete(_id)} className='px-4 py-1 bg-red-300 hover:bg-red-400 duration-150 m-4 rounded-lg'>Delete</button>
    </tr>
  );
};

export default SingleBuyers;
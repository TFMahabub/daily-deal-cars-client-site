import React from 'react';
import deleteFetch from '../fetch/DeleteMethod';
import toast from 'react-hot-toast';

const SingleSeller = ({seller, refetch}) => {
  const { verification, name, email, _id } = seller;

  const handleVarified = id =>{
    fetch(`http://localhost:5000/user/${id}`, {
      method: 'PUT',
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('User verified')
        refetch()
      }
      console.log(data)
    })
  }

  const handleDelete = id =>{
    if(window.confirm("Do you want to delete the User?") === true){
      deleteFetch(id)
      .then(res=>{
        console.log(res)
        if(res.status === 200){
          toast.error('Seller delete successfully')
          refetch()
        }
      })
      .catch(err=>console.error(err))
    }
  }
  return (
    <tr className=''>
      <td className='font-semibold tracking-wide'>{name}</td>
      <td className='tracking-wide'>{email}</td>
      <td className='tracking-wide'>{verification}{verification === 'Not Verified' && <button onClick={()=>handleVarified(_id)} className='px-4 py-1 bg-purple-300 hover:bg-purple-400 text-primary duration-150 ml-2 rounded-lg'>Make Verified</button>}</td>
      <button onClick={()=>handleDelete(_id)} className='px-4 py-1 bg-red-300 text-red-700 hover:bg-red-400 duration-150 m-4 rounded-lg'>Delete</button>
    </tr>
  );
};

export default SingleSeller;
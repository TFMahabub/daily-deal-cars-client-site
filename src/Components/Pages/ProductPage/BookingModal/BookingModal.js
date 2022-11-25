import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import FullWidthButton from '../../../../ReUseableComponents/Button/FullWidthButton';

const BookingModal = ({user, selectedItem}) => {
  
  console.log(selectedItem);

  return (
    <section>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute bg-primary right-2 top-2">✕</label>
          <form action="">
          

          <label className="block dark:text-gray-400 text-primary text-2xl font-semibold mb-1">{selectedItem.name}</label>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1">User Name:</label>
              <input
              type="text"
              name='modalUserName'
              disabled
              value={user.displayName}
              className="input input-bordered w-full"
            />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Email:</label>
              <input
              type="email"
              name='modalUserEmail'
              disabled
              value={user.email}
              className="input input-bordered w-full"
            />
            </div>
           
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Resell Price:</label>
              <input
              type="text"
              name='modalUserResellPrice'
              disabled
              value={selectedItem.resale_price}
              className="input input-bordered w-full"
            />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Phone:</label>
              <input
              type="number"
              required
              name='modalUserPhone'
              className="input input-bordered w-full"
            />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Meeting Location:</label>
              <input
              type="text"
              required
              name='modalUserMeetingLocation'
              className="input input-bordered w-full"
            />
            </div>
            <FullWidthButton type='submit' extraClass={'mt-4'}>Submit</FullWidthButton>



          
          
          
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
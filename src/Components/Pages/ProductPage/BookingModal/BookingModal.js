import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import FullWidthButton from '../../../../ReUseableComponents/Button/FullWidthButton';

const BookingModal = ({user, selectedItem, setOpenModal,}) => {
  
  
  

  const handleOnSubmit = e =>{
    e.preventDefault()

    
    const form = e.target;
    const selectedItemName = selectedItem.name;
    const userName = form.modalUserName.value;
    const userEmail = form.modalUserEmail.value;
    const reSellPrice = form.modalUserResellPrice.value;
    const phone = form.modalUserPhone.value;
    const meetingLocation = form.modalUserMeetingLocation.value;

    const booking = {
      selectedItemName,
      userName,
      userEmail,
      reSellPrice,
      phone,
      meetingLocation
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(()=>{
      toast.success('Booking successfully')
      form.reset()
      setOpenModal(false)
    })
    .catch(err=>console.error(err))
    
  }

  return (
    <section>
      <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute bg-primary right-2 top-2">✕</label>
          <form onSubmit={handleOnSubmit}>
          

          <label className="block dark:text-gray-400 text-primary text-2xl font-semibold mb-1">{selectedItem.name}</label>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1">User Name:</label>
              <input
              type="text"
              name='modalUserName'
              disabled
              defaultValue={user.displayName}
              className="input input-bordered w-full"
            />
            </div>
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Email:</label>
              <input
              type="email"
              name='modalUserEmail'
              disabled
              defaultValue={user.email}
              className="input input-bordered w-full"
            />
            </div>
           
            <div className="text-sm">
              <label className="block dark:text-gray-400 mb-1 mt-3">Resell Price:</label>
              <input
              type="text"
              name='modalUserResellPrice'
              disabled
              defaultValue={selectedItem.resale_price}
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
import React from 'react';

const ReportedItem = () => {
  return (
    <section className="overflow-x-auto lg:col-span-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th  className='bg-slate-100 rounded-none'>Item Name</th>
              <th  className='bg-slate-100 rounded-none'>Brand/model</th>
              <th  className='bg-slate-100 rounded-none'>seller Name</th>
              <th  className='bg-slate-100 rounded-none'>Delete</th>
            </tr>
          </thead>
          <tbody>
         
          </tbody>
        </table>
      </section>
  );
};

export default ReportedItem;
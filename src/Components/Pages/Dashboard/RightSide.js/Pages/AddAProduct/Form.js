import React from 'react';
import FullWidthButton from '../../../../../../ReUseableComponents/Button/FullWidthButton';

const Form = () => {
  return (
    <section>
      <form action="" className="">
          <div className="text-sm">
            <label className="block dark:text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="username"
              placeholder="Email"
              className="w-full ring-gray-400 ring-1 mb-4 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div className="text-sm">
            <label className="block dark:text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full ring-gray-400 ring-1 mb-4 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          
          <FullWidthButton type="submit">Login</FullWidthButton >
        </form>
    </section>
  );
};

export default Form;
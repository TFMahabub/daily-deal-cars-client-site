import React from 'react';

const Blog = () => {
  return (
    <div className='container mx-auto'>
        <h2 className='text-xl font-semibold text-primary text-center mt-4'>-----Blog-----</h2>
      <article className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16'>
        <div className=''>
          <h4 className='text-lg font-semibold text-gray-600 tracking-wider'>1. What are the different ways to manage a state in a React application?</h4>
          <p className='text-gray-400'>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.</p>
        </div>
        <div className=''>
          <h4 className='text-lg font-semibold text-gray-600 tracking-wider'>2. How does prototypical inheritance work?</h4>
          <p className='text-gray-400'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
        </div>
        <div className=''>
          <h4 className='text-lg font-semibold text-gray-600 tracking-wider'>3. What is a unit test? Why should we write unit tests?</h4>
          <p className='text-gray-400'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
        <div className='col-span-3'>
          <h4 className='text-lg font-semibold text-gray-600 tracking-wider'>4. React vs. Angular vs. Vue?</h4>
          <p className='text-gray-400'>Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic. One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course. Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.</p>
        </div>
      </article>
    </div>
  );
};

export default Blog;
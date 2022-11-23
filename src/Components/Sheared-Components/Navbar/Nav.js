import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const user = 'user';



  // const handleSingOut = () =>{
  //   logOut()
  //   .then(()=>{
  //     alert('logOut successfully')
  //   })
  //   .catch(err=>console.error(err))
  // }


  const menus = 
  <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact_us'>Contact Us</Link></li>
    {/* {
      user?.uid?
      <li className='lg:hidden block'><button onClick={handleSingOut}>SignOut</button></li>
      :
      <li><Link to='/login'>Login</Link></li>
    } */}
  </>
  return (
    <nav className='bg-slate-300'>
      <div className="navbar container mx-auto md:flex justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52">
              {menus}
            </ul>
          </div>
          <Link to='/' className="normal-case text-xl">Daily Deal Cars</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu tracking-wide font-medium menu-horizontal p-0">
            {menus}
          

          {
            user?.uid &&
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL? user?.photoURL : 'https://i.ibb.co/ftb56z3/user.jpg'} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a href='' className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><button >SignOut</button></li>
              </ul>
            </div>
          }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';
// import Directors from './Directors';

const NavBar = () => {
  return (
    <div className='main-nav'>
      <NavLink to='/'>Home </NavLink>
   
      <NavLink to='/dog-container'> Dogs</NavLink> 
      {/* <NavLink to='/directors'>Directors</NavLink> 
      <NavLink to='/actors'>Actors</NavLink>  */}
    </div>
  );
};

export default NavBar;

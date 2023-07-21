import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
                      <div class="navbar bg-base-100 navber-start ml-28">
  <div class="">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
      <button class="bg-teal-200 text-black-600">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    <span class="btm-nav-label">Menu</span>
  </button>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/menu'>All Products</Link></li>
      <li><Link to='/featured'>Featured</Link></li>
      <li> <Link to='/previous'>Previous Orders</Link></li>
      <li><Link to='/favourite'>Favourite Products</Link></li>
    
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

    <li><Link to='/menu'>All Products</Link></li>
      <li><Link to='/featured'>Featured</Link></li>
      <li> <Link to='/previous'>Previous Orders</Link></li>
      <li><Link to='/favourite'>Favourite Products</Link></li>
    
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Nav;
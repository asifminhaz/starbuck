import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import Nav from '../Nav/Nav';

const Menu = () => {
    return (
        <div>
          <Nav></Nav>
             {/* <div class="navbar bg-base-100 navber-start ml-28">
  <div class="">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
       <p>Menu</p>
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
  
</div> */}
            <Products></Products>
        {/* <div class="navbar bg-base-100 navber-start">
  <div class="">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
       <p>Menu</p>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/products'>All Products</Link></li>
      <li><Link to='/featured'>Featured</Link></li>
      <li> <Link to='/previous'>Previous Orders</Link></li>
      <li><Link to='/favourite'>Favourite Products</Link></li>
    
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

    <li><Link to='/products'>All Products</Link></li>
      <li><Link to='/featured'>Featured</Link></li>
      <li> <Link to='/previous'>Previous Orders</Link></li>
      <li><Link to='/favourite'>Favourite Products</Link></li>
    
    </ul>
  </div>
  
</div> */}
        </div>
    );
};

export default Menu;
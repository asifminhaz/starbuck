import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {

    return (
        <div>
       <div class="navbar bg-base-100 navber-start">
  <div class="">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><li><Link to='/rewards'>REWARDS</Link></li></li>
        <li>
          <a><li><Link to='/menu'>Menu</Link></li></a>
          <ul class="p-2">
          <li><Link to='/menu'>All Products</Link></li>
      <li><Link to='/featured'>Featured</Link></li>
      <li> <Link to='/previous'>Previous Orders</Link></li>
      <li><Link to='/favourite'>Favourite Products</Link></li>
          </ul>
        </li>
        <li> <li><Link to='/gift'>GIFT</Link></li></li>
        {/* <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/rewards'>REWARDS</Link></li>
        <li><Link to='/gift'>GIFT</Link></li> */}
        <div class=" join">
  <button class="btn btn-sm ghost outline ">Sign in</button>
  <button class="btn btn-sm ml-5 text-white outline btn-neutral">join now</button>
  </div>
      </ul>
    </div>
    <Link to='/home' class="btn btn-ghost normal-case text-xl">Starbucks</Link>
  </div>
  <div class="navbar-start hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link to='/menu'>MENU</Link></li>
      <li><Link to='/rewards'>REWARDS</Link></li>
      {/* <li tabindex="0">
      </li> */}
      <li className=""><Link to='/gift'>GIFT</Link></li>
    </ul>
  </div>
  <div class="navbar-end m-5  join">
  <button class="btn btn-xs ghost outline ">Sign in</button>
  <button class="btn btn-xs ml-5 text-white outline btn-neutral">join now</button>
  </div>
  {/* <div class="navbar-end ">
    <a class="btn">Sign up</a>
  </div> */}
</div>
        </div>
    );
};

export default Header;
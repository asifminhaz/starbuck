import React from 'react';
import Nav from '../Nav/Nav';

const Previous = () => {
    return (
        <div>
            <Nav></Nav>
            <h1 className='text-start text-3xl font-bold ml-32'>Previous Orders</h1>
            {/* <div class="card w-96 ">
  <figure class="px-10 pt-10">
    <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">When history repeats itself</h2>
    <p>Previous orders will appear here to quickly order again.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
<div class="card w-96 ">
  <figure><img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="Shoes" /></figure>
  <div class="card-body ml-20 justify-center text-start">
 
  <h2 class="card-title font-bold">When history repeats itself</h2>
    <p>Previous orders will appear here to quickly order again.</p>
    <div class="card-actions justify-start">
      <div class="badge badge-outline">Sign in</div> 
      <div class="badge badge-outline">Join now</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Previous;
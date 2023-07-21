import React from 'react';
import Nav from '../Nav/Nav';

const Favourite = () => {
    return (
        <div>
            <Nav></Nav>
            <h1 className='text-start text-3xl font-bold ml-32'>Favourite</h1>
            <div class="card w-96 ">
  <figure><img className='w-36 m-5' src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="Shoes" /></figure>
  <div class="card-body ml-20 justify-center text-start">
 
  <h2 class="card-title font-bold">Save your favorite mixes</h2>
    <p>Use the heart to save customizations. Your favorites will appear here to order again.</p>
    <div class="card-actions justify-start">
      <div class="badge badge-outline">Sign in</div> 
      <div class="badge badge-outline">Join now</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Favourite;

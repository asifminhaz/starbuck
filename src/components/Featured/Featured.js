import React from 'react';
import Nav from '../Nav/Nav';
import './Featured.css'

const Featured = () => {
    return (
        <div>
          
            <h1 className='font-bold text-5xl m-10'>Yum in the sun</h1>
            <div className='grid grid-cols-2  frozen'>
  <div className='text-center justify-center  bg-pink-400'>
    <h1 className='text-3xl font-bold mt-10 p-10'>New Frozen Lemonade Starbucks Refreshers® Beverages</h1>
    <p className='p-10 text-2xl'>Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit with real fruit pieces blended with lemonade.</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline mango">Order Now</button>
  </div>
  <div>
    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84460.jpg'></img>
  </div>
        </div>
            {/* <div className='grid grid-cols-2  '>
  <div className='text-center justify-center bg-rose-300'>
    <h1 className='text-3xl font-bold mt-10 p-10'>New Frozen Lemonade Starbucks Refreshers® Beverages</h1>
    <p className='p-10 text-2xl'>Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit with real fruit pieces blended with lemonade.</p>
    <button class="btn btn-sm">Order Now</button>
  <div>
    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84460.jpg'></img>
  </div>
        </div>
        </div> */}
        <div >
        <div class="grid grid-cols-2 gap-4 caramel">
  <div className='bg-indigo-400'>
<img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84461.jpg'></img>
    <h1 className='text-3xl font-bold mt-10 p-5'>Caramel Ribbon Crunch Frappuccino® Blended Beverage</h1>
    <p className='p-8 text-2xl'>A blend of coffee, milk and ice with dark caramel sauce and a crunchy caramel-sugar topping.​</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline mb-8">Order Now</button>
  </div>

  <div className='bg-indigo-400'>
  <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84462.jpg'></img>
    <h1 className='text-3xl font-bold mt-10 p-5'>Mocha Cookie Crumble Frappuccino® Blended Beverage</h1>
    <p className='p-8 text-2xl'> Frappuccino® chips, mocha sauce and chocolaty cookie crumbles join coffee, milk and ice.</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline mb-8">Order Now</button>
  </div>
</div>
        </div>
        <div>
        <div className='grid grid-cols-2 mt-12 lemonade'>
 
  <div>
    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84463.jpg'></img>
  </div>
  <div className='text-center justify-center  bg-yellow-300'>
    <h1 className='text-3xl font-bold mt-10 p-10'>New Frozen Lemonade Starbucks Refreshers® Beverages</h1>
    <p className='p-10 text-2xl'>Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit with real fruit pieces blended with lemonade.</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline acai">Order Now</button>
  </div>
        </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-12 spinach">
  <div className='bg-red-400'>
<img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84528.jpg'></img>
    <h1 className='text-3xl font-bold'>Spinach, Feta & Egg White Wrap</h1>
    <p className='p-10 text-2xl'>Cage-free egg whites, spinach and feta cheese wrapped in a whole-wheat tortilla.​</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline feta">Order Now</button>
  </div>

  <div className='bg-red-400'>
  <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84529.jpg'></img>
    <h1 className='text-3xl font-bold'>Impossible™ Breakfast Sandwich</h1>
    <p className='p-8 text-2xl'> An Impossible™ Sausage Patty Made From Plants, a cage-free fried egg and Cheddar on a sesame ciabatta bun.*</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline mb-8">Order Now</button>
  </div>
</div>
<div className='grid grid-cols-2 mt-16 bg-green-900 text-white blend'>

  <div>
  <h1 className='text-2xl font-bold mt-10'>A New Blend Created by Our Baristas</h1>
  <p className='p-10 text-2xl'>Introducing Starbucks® Green Apron Blend™, from those who know our coffee best. Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.</p>
    <button class="btn btn-sm btn-ghost text-white btn-outline mb-8">Order Now</button>
  </div>
  <div className='text-center justify-center'>
  <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84465.jpg'></img>
  </div>
        </div>
        </div>
    );
};

export default Featured;
import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <div>
        <div className='grid grid-cols-2 md:bg-rose-300 talk'>
  <div className='text-center justify-center bg-rose-300'>
    <h1 className='text-5xl font-bold mt-28'>Talk about </h1>
    <h1 className='text-5xl font-bold'>refreshing </h1>
    <p className='text-2xl font semi-bold p-10'>Introducing our vibrant new Frozen Lemonade Starbucks Refreshers® beverages: Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit</p>
    <button class="btn btn-sm btn-ghost text-dark btn-outline">Order Now</button>
  </div>
  <div className='talks'>
    <img className='' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84430.jpg'></img>
  </div>
        </div>
        <div className='grid grid-cols-2 mt-16 bg-emerald-200 soak'>
  <div className='text-center justify-center'>
  <img className='soaks' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84431.jpg'></img>
  </div>
  <div>
  <h1 className='text-4xl font-bold mt-10'>Soak up delicious Rewards</h1>
    <h2 className='text-2xl font semi-bold p-12 '>You’re closer than you think to free drinks & food.*</h2>
    <button class="btn btn-ghost btn-outline soakbutton">join now</button>
  </div>
        </div>
        <div className='grid grid-cols-2  mt-16 summer'>
  <div className='text-center justify-center bg-indigo-400 p-16'>
    <h1 className='text-5xl font-bold mt-10'>Summer to the max</h1>
    <h2 className='text-3xl font semi-bold mt-8'>Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino® blended beverage.</h2>
    <button class="btn btn-sm btn-ghost text-dark btn-outline mt-5">Order Now</button>
  </div>
  <div>
    <img src='https://images.pexels.com/photos/5061215/pexels-photo-5061215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
  
  </div>
        </div>
        <div className='grid grid-cols-2 mt-16 satisfied'>
  <div className='text-center justify-center'>
  <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84433.jpg'></img>
  </div>
  <div className=' bg-green-400'>
  <h1 className='text-5xl font-bold mt-32'>Get there </h1>
  <h1 className='text-5xl font-bold'>satisfied</h1>
    <h2 className='text-2xl font semi-bold p-10 justify-center text-center '>Fill up on the way with a Spinach, Feta & Egg White Wrap or Bacon, Sausage & Egg Wrap.</h2>
    <button class="btn btn-sm btn-ghost text-dark btn-outline satisfiedbtn">Order Now</button>
  </div>
        </div>
        <div className='grid grid-cols-2 mt-16 bekind'>
  <div className='text-center justify-center bg-green-100'>
    <h1 className='text-3xl font-bold mt-16'>Be kind to your mind</h1>
    <h2 className='text-2xl font semi-bold mt-3 p-12'>We teamed up with Headspace to bring you four free meditations on kindness, plus a special offer for Starbucks® Rewards members—discover more mindfulness with a two-month free membership.**</h2>
    <button class="btn btn-sm btn-ghost text-dark btn-outline bekindbutton">Listen Now</button>
  </div>
  <div>
    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84617.jpg'></img>
    
  </div>
        </div>

        <div className=' justify-center text-center font-semi-bold'>
            <h1 className='mt-20'>*Starbucks Rewards is available at participating stores. Some restrictions apply. See</h1>
            <h1> https://starbucks.com/rewards</h1>
            <h1 className='mt-28'>**After your two-month free trial, exclusive to Starbucks® Rewards members, </h1>
            <h1>the subscription renews automatically at $69.99 USD for an annual subscription to Headspace.</h1>
            <h1 className='mb-10'> You can cancel at any time. This offer is for new and returning Headspace users only.</h1>
        </div>
        </div>
    );
};

export default Home;
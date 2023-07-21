import React from 'react';
import rewards from '../Rewards/Rewards.css'
import { Link } from 'react-router-dom';
import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
import './Rewards.css'

const Rewards = () => {
    const myStyle={
        backgroundImage:
 "url('https://images.pexels.com/photos/7139927/pexels-photo-7139927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const myStyl={
        backgroundImage:
 "url('https://img.freepik.com/free-photo/top-view-cup-coffee-hot-strong-drink-light-blue-background-drink-coffee-cocoa-sleep-color-photo_140725-55637.jpg?w=740&t=st=1688901646~exp=1688902246~hmac=4a401a94c5cff9a10926cc2079890b369152263ab3e5a64671813d9a93ea9397')",
//  "url('https://images.pexels.com/photos/3399169/pexels-photo-3399169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    
  


    return (
        <div>
             <div className='' style={myStyl}>
                <div className='text-start'>
        <h1 className='pt-48 ml-5 text-4xl font-bold '>FREE COFFEE
 </h1>
        <h1 className=' text-4xl font-bold  ml-5'>
IS A TAP AWAY </h1>
        {/* <img className='lg:ml-96 md:wd-48' src='https://images.pexels.com/photos/3399169/pexels-photo-3399169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img> */}
        <p className=' mt-3 ml-5'>Join now to start earning Rewards.</p>
        </div>
        <div class="card-actions justify-start ml-5 mt-5 ">
      <button class="btn btn-accent bg-green-900 text-white rounded">join now</button>
    </div>
      </div>
            {/* <div className='bg-green-100  text-start'>
            <div class="card card-side bg-green-100  shadow-xl">
            <div class="card-body">
    <h2 class="card-title mt-12">FREE COFFEE
IS A TAP AWAY</h2>
    <p>Join now to start earning Rewards.</p>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-success">join now</button>
    <p className='mb-96'>Or join in the app for the best experience</p>
 
  </div>
  <figure><img src="https://images.pexels.com/photos/303324/pexels-photo-303324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie"/></figure>
  
</div>
            </div> */}
            <div>
                <h1 className='mt-12 font-semi-bold text-4xl'>Getting started is easy</h1>
                <h3 className='font-semi-bold text-2xl'>Earn Stars and get rewarded in a few easy steps.</h3>
                <div className='grid grid-cols-3 m-12 create'>
                    <div>
                       <h1>1</h1>
                       <h1 className='text-2xl font-bold mt-2'>Create an account</h1>
                       <p className='font-semi-bold  mt-3'>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                    </div>
                    <div>
                        <h1>2</h1>
                        <h1 className='text-2xl font-bold mt-2'>Order and pay how you’d like</h1>
                        <p className='mt-3 font-semi-bold'>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                    </div>
                    <div>
                        <h1>3</h1>
                        <h1 className='text-2xl font-bold mt-2'>Earn Stars, get Rewards</h1>
                        <p className='mt-3 font-semi-bold'>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars</p>
                    </div>
  
                </div>
            </div>
            <div className=''>
            <div className='bg-emerald-50'>
                <h1 className='m-16 font-semi-bold text-4xl p-16'>Get your favorites for free</h1>
                <div className=''>
                <Tabs>
  <TabLink className='m-10' to="tab1">25★</TabLink>
  <TabLink className='m-10'  to="tab2">100★</TabLink>
  <TabLink className='m-10'  to="tab3">200★</TabLink>

  <TabLink className='m-10' to="tab4">300★</TabLink>
  <TabLink className='m-10' to="tab5">400★</TabLink>
  <TabContent for="tab1">
  <div class=" bg-emerald-100 grid grid-cols-2 p-5 drink">
  <figure><img className='w-96 ml-60 drinks' src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="Shoes" /></figure>
  <div class="text-start mt-12">
    <h2 className='text-2xl font-bold'>
    Customize your drink

    </h2>
    <p className='pt-8'>Make your drink just right with an extra</p>
    <p className=''>espresso shot, nondairy milk or a dash of your</p>
    <p className='pb-5'>favorite syrup.</p>
    
  </div>
</div>
  </TabContent>
  <TabContent for="tab2">
  <div class=" bg-emerald-100 grid grid-cols-2 coffee">
  <figure><img className='w-96 ml-60 coffees' src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="Shoes" /></figure>
  <div class="text-start mt-10">
    <h2 className='text-2xl font-bold'>
    Brewed hot or iced coffee or 

    </h2>
    <h2 className='text-2xl font-bold'>
    
     tea, bakery item, packaged 

    </h2>
    <h2 className='text-2xl font-bold'>
   snack and more

    </h2>
    <p className='pt-8'>Treat yourself to an iced coffee, .</p>
    <p className='pb-5'>buttery croissant, bag of chips and more.</p>
    
  </div>
</div>
  </TabContent>
  <TabContent for="tab3">
  <div class=" bg-emerald-100 grid grid-cols-2 handcrafted">
  <figure><img className='w-96 ml-60 handcrafteds' src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="Shoes" /></figure>
  <div class="text-start mt-10">
    <h2 className='text-2xl font-bold'>
    Handcrafted drink (Cold

    </h2>
    <h2 className='text-2xl font-bold'>
      Brew, lattes and more) or hot 

    </h2>
    <h2 className='text-2xl font-bold'>
     breakfast

    </h2>
    <p className='pt-8'>Turn good mornings great with a delicious</p>
    <p className=''>handcrafted drink of your choice, breakfast</p>
    <p className='pb-5'>sandwich or oatmeal on us.</p>
    
  </div>
</div>
  </TabContent>
  <TabContent for="tab4">
  <div class=" bg-emerald-100 grid grid-cols-2 p-5 sandwitch">
  <figure><img className='w-96 ml-60 sandwitchs' src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="Shoes" /></figure>
  <div class="text-start mt-10">
    <h2 className='text-2xl font-bold'>
 
Sandwich, protein box or at-

    </h2>
    <h2 className='text-2xl font-bold'>
    home coffee

    </h2>
   
    <p className='pt-8'>Enjoy a PM pick-me-up with a lunch</p>
    <p className=''>sandwich, protein box or a bag of coffee—</p>
    <p className='pb-5'>including Starbucks VIA Instant®.</p>
    
  </div>
</div>
  </TabContent>
  <TabContent for="tab5">
  <div class=" bg-emerald-100 grid grid-cols-2 p-8 nmarchendise">
  <figure><img className='w-96 ml-60 marchendises' src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="Shoes" /></figure>
  <div class="text-start mt-10">
    <h2 className='text-2xl font-bold'>
 
    Select Starbucks®

    </h2>
    <h2 className='text-2xl font-bold'>
    merchandise

    </h2>
   
    <p className='pt-8'>Take home a signature cup, drink tumbler or</p>

    <p className='pb-5'>your choice of coffee merch up to $20.</p>
    
  </div>
</div>
  </TabContent>
</Tabs>
                </div>
   

                {/* <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs> */}
                {/* <div className='grid grid-cols-5'>
                <div tabindex="0" class="collapse bg-emerald-100 p-16"> 
  <div class="collapse-title text-xl font-medium">
    25★
  </div>
  <div class="card w-48 bg-emerald-100 ">
  <figure><img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="Shoes" /></figure>
  <div class="card-body text-start">
    <h2 class="card-title ">
    Customize your drink

    </h2>
    <p>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
    
  </div>
</div>
  </div>
                <div tabindex="0" class="collapse bg-emerald-100 p-16"> 
  <div class="collapse-title text-xl font-medium">
    100★
  </div>
  <div class="collapse-content"> 
  <div class="card w-52 bg-cyan-100 ">
  <figure><img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="Shoes" /></figure>
  <div class="card-body text-start">
    <h2 class="card-title">
   
Brewed hot or iced coffee or tea, bakery item, packaged snack and more

    </h2>
    <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more..</p>
    
  </div>
</div>
  </div>
  </div>
                <div tabindex="0" class="collapse bg-emerald-100 p-16"> 
  <div class="collapse-title text-xl font-medium">
    200★
  </div>
  <div class="collapse-content"> 
  <div class="card w-52 bg-emerald-100 ">
  <figure><img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="Shoes" /></figure>
  <div class="card-body text-start">
    <h2 class="card-title ">
   
    Handcrafted drink (Cold Brew, lattes and more) or hot breakfast

    </h2>
    <p>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
    
  </div>
</div>
  </div>
  </div>
                <div tabindex="0" class="collapse bg-emerald-100 p-16"> 
  <div class="collapse-title text-xl font-medium">
    300★
  </div>
  <div class="collapse-content"> 
  <div class="card w-52 bg-emerald-100 ">
  <figure><img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="Shoes" /></figure>
  <div class="card-body text-start">
    <h2 class="card-title ">
    Sandwich, protein box or at-home coffee

    </h2>
    <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant.</p>
    
  </div>
</div>
  </div>
  </div>
                <div tabindex="0" class="collapse bg-emerald-100 p-16"> 
  <div class="collapse-title text-xl font-medium">
    400★
  </div>
  <div class="collapse-content"> 
  <div class="card w-52 bg-emerald-100">
  <figure><img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="Shoes" /></figure>
  <div class="card-body text-start">
    <h2 class="card-title ">
    Select Starbucks® merchandise
    </h2>
    <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
    
  </div>
</div>
  </div>
  </div>
  </div> */}
            </div>
            </div>
            <div>
                <h1 className='text-4xl ont-sewmi-bold mt-16'>Endless Extras</h1>
                <p className='mt-3'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                <p> tasty Rewards and—yes, free coffee.</p>
                <div className='grid grid-cols-3 m-20 freebies'>
                    <div>
                    <figure><img className='w-48 ml-28 freebiess' src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="Shoes" /></figure>
                       <h1 className='text-2xl font-bold mt-2'>Fun freebies</h1>
                       <p className='font-semi-bold  mt-3'>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills..</p>
                    </div>
                    <div>
                    <figure><img className='w-48 ml-28 pay' src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="Shoes" /></figure>
                        <h1 className='text-2xl font-bold mt-2'>Order & pay ahead</h1>
                        <p className='mt-3 font-semi-bold'>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                    </div>
                    <div>
                    <figure><img className='w-48 ml-28 faster' src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="Shoes" /></figure>
                        <h1 className='text-2xl font-bold mt-2'>Get to free faster</h1>
                        <p className='mt-3 font-semi-bold'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                     
                    </div>
  
                </div>

            </div>
            <div>
                <div className='bg-slate-200'>
                    <h1 className='text-4xl font-semi-bold  pt-20'>Cash or card, you earn Stars</h1>
                    <p className='mt-3'>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
                    <div className=''>
                    <div class=" m-16 flex scan  ">
  <div class="">
    <h1 className='text-3xl font-bold'>1★Star per dollar</h1>
    <p>Pay as you go</p>
  </div>
  <div class="  grid-cols-2">
  <div class="card lg:card-side bg-slate-200  ">
  <figure><img className='w-28 ml-10 pay' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="Album"/></figure>
  <div class=" text-start ml-3">
    <h2 class="text-2xl font-bold">Scan and pay separately</h2>
    <p className='m-2'>Use cash or credit/debit card at the register.</p>
    
  </div>
</div>
  </div>
  <div class=" grid-cols-2">
  <div class="card lg:card-side bg-slate-200  ">
  <figure><img className='w-28 ml-10 save' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="Album"/></figure>
  <div class="ml-3 jusatify-center text-start">
    <h2 class="text-2xl font-bold">Save payment in the app</h2>
    <p className='mt-3'>Check-out faster by saving a credit/debit</p>
    <p className=''>card or PayPal to your account. You’ll</p>
    <p className=''>be able to order ahead or scan</p>
    <p className=''>and pay at the register in one step.</p>
    
  </div>
</div>
  </div>
</div>
                    <div class="flex m-16 grid-cols-3 funds">
  <div class="">
    <h1 className='text-3xl font-bold'>2★Star per dollar</h1>
    <p>Add funds in the app</p>
  </div>
  <div class=" ... grid-cols-2">
  <div class="card lg:card-side bg-slate-200  ">
  <figure><img className='w-28 ml-10 payload' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="Album"/></figure>
  <div class="ml-3 text-start">
    <h2 class="text-2xl font-bold">
Preload</h2>
    <p className='mt-3'>To save time and earn Stars twice as fast, add </p>
    <p>money to your digital Starbucks Card using </p>
    <p>any payment optionp.Scan and pay in one step</p>
    <p>or order ahead in the app</p>
    
  </div>
</div>
  </div>
  <div class="grid-cols-2">
  <div class="card lg:card-side bg-slate-200  ">
  <figure><img className='w-28 ml-10 register' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="Album"/></figure>
  <div class="ml-3 jusatify-center text-start">
    <h2 class="text-2xl font-bold">
Register your gift card</h2>
    <p className='mt-3'>Then use it to pay through the app.</p>
    <p> You can even consolidate balances from </p>
    <p> multiple cards in one place.</p>

    
  </div>
</div>
  </div>
</div>
                </div>
                </div>
            </div>
            <div className='border'>
        
            <div className='' style={myStyle}>
        <h1 className='pt-16 text-4xl font-bold'> Keep the Rewards Coming </h1>
        <p className='pt-8'>The Rewards don't stop at your morning coffee. Join Starbucks®</p>
        <p className=''> Rewards and unlock perks from our partners, all while earning more Stars.</p>
        <img className='lg:ml-96 md:wd-48' src='https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png'></img>
        <p>Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn .</p>
        <p> 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.</p>
        <button class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-btn-sm btn-accent mt-3">Join startbucks rewards</button>
      </div>
     
            </div>
            <div>
            <div className='text-start ml-20 questions'>
                <h1 className='text-4xl font-bold mt-20'>Questions?</h1>
                <p className='mt-5'>We want to help in any way we can. You can ask your barista anytime or 
</p>
                <p> we’ve answered the most commonly asked questions 
</p>
            </div>
            </div>
            
                <div className='m-10 text-start'>
                    <p>At participating stores. Restrictions apply.</p>
                    <p>* Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.</p>
                    <p>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit 
deltastarbucks.com/terms
opens in new window.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 earning">
                <div className='text-start m-10'>
                    <h1 className='text-3xl font-semi-bold '>EARNING STARS</h1>
                    <p className='mt-3'>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                    <p className='mt-3'>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                    <p className='mt'>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                    <h1 className='text-3xl font-semi-bold mt-5'>BENEFITS</h1>
                    <p className='mt-3'>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                </div>
                <div className='text-start m-10'>
                    <h1 className='text-3xl font-semi-bold '>TERMS OF USE</h1>
                    <p className='mt-3'>For full program details visit 
starbucks.com/rewards/terms.</p>
                    <p className='mt-3'>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details..</p>
                    <p className='mt'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
Starbucks Store Locator
 and search for locations honoring “Redeem Rewards”.</p>
 <p className='mt-3'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
 <h1 className='text-3xl font-semi-bold mt-5'>REDEEMING REWARDS</h1>
                    <p className='mt-3'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
                </div>
 
                 
</div>
        </div>
    );
};

export default Rewards;
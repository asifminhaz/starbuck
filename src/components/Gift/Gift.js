import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Gift.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const GFift = () => {
    return (
        <div>
            <div className='m-10'>
          <h1 className='text-2xl text-start  pb-5 font-bold'>FEATURED</h1>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/birthday-landing-page-template_23-2148720532.jpg?t=st=1688795232~exp=1688795832~hmac=5231a06c9a82f5392fb02705de72499e761a78564fc57e033abe4ccb19ee1299'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thanks-logo-collection_1262-3428.jpg?w=740&t=st=1688795628~exp=1688796228~hmac=9221a6cc4aeab22378dd24723775afb1c6ecff0531ad48195666744819a7cc19'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-festas-juninas-background_52683-84647.jpg?w=740&t=st=1688795986~exp=1688796586~hmac=662a421469d2887a41e46c31df27e1b6cdc173375d6c4a62bfb5f0c24f2f8cd0'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-47493.jpg?w=740&t=st=1688811195~exp=1688811795~hmac=e9c69caff1c9937d59b67bd081cc8465cb71efa91c48cff56e0dcd59b13e5180'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/international-friendship-day-illustration_52683-63295.jpg?w=740&t=st=1688810417~exp=1688811017~hmac=994c4db0f6771f5c68fa6576a0130f95956ded0f175d0c4b5f5087ffcf463253'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/flat-father-s-day-background_23-2149384145.jpg?w=740&t=st=1688810098~exp=1688810698~hmac=7008761532533f370cce01823864aeb9517f4c081fe485b3972b2cf0be201522'></img></SwiperSlide>
      </Swiper>
      </div>
      <div className='bg-sky-200'>
        {/* <div className='p-12 text-start'>
        <h1 className='font-bold text-3xl '>Got a gift card? <span className='font-semi-bold'>
Earns 2★Stars per $1</span> <span><button class="btn btn-outline">Add or Reload</button></span> <span><button class="btn btn-neutral text-white rounded">Check Balance</button></span><span className='ml-24 text-1xl'>Card Terms & Conditions</span></h1>
</div> */}
<div class="grid grid-cols-4  p-12 got">
  <div>
  <h1 className='font-bold text-3xl '>Got a gift card?</h1>
  </div>
  <div>
  <h3 className='text-3xl font-semi-bold mr-8'>Earns 2★Stars per $1</h3>
  </div>
   <div className=''>
   <button class="btn btn-outline btn-sm m-3 gotbutton">Add or Reload</button>
   <button class="btn btn-neutral btn-sm text-white rounded">Check Balance</button>
</div>
<div className='text-end m-5'>
   <p>Card Terms & Conditions</p>
</div>
  </div>
  
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>SUMMER</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/summer-lettering-with-photo_23-2148523749.jpg?w=740&t=st=1688794875~exp=1688795475~hmac=20f2fc28f31d657e5bf718d6d9aa3b91eb3e9b7043e79091fd955c554e427ee9'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/watercolor-background-summertime_23-2150257626.jpg?w=740&t=st=1688794903~exp=1688795503~hmac=02cb46cc90dd410c41b70d988725780c1b63fbda4ea21da40e402a9ce825378a'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-summer-background-concept_23-2148549231.jpg?w=740&t=st=1688794999~exp=1688795599~hmac=ab60de3c22d43bcba04d0bf50568100a0f31acf169234074deec05d0493ce41b'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-ice-cream-ad_52683-64645.jpg?w=740&t=st=1688795031~exp=1688795631~hmac=8a0e607530f139244ab70519db3461a34a4bbbb467948b2f43ae157bdec390c7'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/summer-hand-drawn-background_23-2149391485.jpg?w=740&t=st=1688795060~exp=1688795660~hmac=6078c59a258aa1769c451fe246f4f6339b1e0bb232bd2bb1d3d8882470336916'></img></SwiperSlide>
    
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>BIRTHDAY</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-happy-birthday-black-golden_1361-3241.jpg?w=740&t=st=1688795240~exp=1688795840~hmac=eafd0914ce7849ed5c4a005bd2ba43188e915867ce0bca48962a70c1842c149b'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/happy-birthday-celebration-background-with-falling-confetti_1017-22490.jpg?w=740&t=st=1688795269~exp=1688795869~hmac=b2a3f66ac1fdb7e16ecf116b10fe8ce18e95217fde0d3d4483c5be798c049cb4'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/funny-hand-drawn-birthday-collection_1361-1630.jpg?w=740&t=st=1688795294~exp=1688795894~hmac=99ae04aea071409fb957871ad462924bbd57073cdc8ae2493e49c7202995d072'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/happy-birthday-you-lettering_23-2148453222.jpg?w=740&t=st=1688795315~exp=1688795915~hmac=45fea3e1f6bb9617bb9bae8c8d6ebce8e92e06c8aae1ea236bbb7ceaf4cdd0a0'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/birthday-landing-page-template_23-2148720532.jpg?t=st=1688795232~exp=1688795832~hmac=5231a06c9a82f5392fb02705de72499e761a78564fc57e033abe4ccb19ee1299'></img></SwiperSlide>
        <SwiperSlide><img className='https://img.freepik.com/free-photo/birthday-background-invitation_24972-1665.jpg?w=826&t=st=1688795365~exp=1688795965~hmac=032c204022064c0c7a5b579b18a20e8d36dab6a47485c10d5e8769ceea582689' src=''></img></SwiperSlide>
       
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>THANK YOU</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/painted-thank-you-label-template_23-2148689616.jpg?w=740&t=st=1688795453~exp=1688796053~hmac=3cfc3007e965a4925d7ce772cddeed6c9f30ff0cc491c85ad42211a2cf61a1a3'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thank-you-word-paper-cut-typography-font_53876-115082.jpg?w=740&t=st=1688795480~exp=1688796080~hmac=607a0b8467f7fad3647b35492f2edd86b796a330cda13a7e3f421bd5164f1e90'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-13397.jpg?w=740&t=st=1688795533~exp=1688796133~hmac=d9da2c4136682e332484da39580285c3ad0e05210430644f6ce1d3c0183a345f'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thanks-logo-collection_1262-3428.jpg?w=740&t=st=1688795628~exp=1688796228~hmac=9221a6cc4aeab22378dd24723775afb1c6ecff0531ad48195666744819a7cc19'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg?w=740&t=st=1688795650~exp=1688796250~hmac=06033afc046467572f6f744d5989449e27bb2638c64cbb8fd58d92cb790e9a5e'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/thank-you-your-attention-sign-illustration_23-2150310393.jpg?w=740&t=st=1688795716~exp=1688796316~hmac=31a5a01fe0779fa25f8569557649d67a985662f27f9a02bd2ae15d05642cdfab'></img></SwiperSlide>
      
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>CELEBRATION</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/colorful-confetti-background-with-text-space_1017-32374.jpg?w=900&t=st=1688795870~exp=1688796470~hmac=e6387bd76b1d30474293003222703f60675b6e784e4d5cb67fb8a9cc679caa44'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-festas-juninas-background_52683-84647.jpg?w=740&t=st=1688795986~exp=1688796586~hmac=662a421469d2887a41e46c31df27e1b6cdc173375d6c4a62bfb5f0c24f2f8cd0'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-photo/confetti-colorful-explosion-blured-background-bright-splash-design-decoration-with-glitter_90220-1174.jpg?w=740&t=st=1688796032~exp=1688796632~hmac=71ca8b896cab869f63b8f516fa2c95128f5ccc0db254311383fd7a07d6db0f0b'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/celebration-background-with-colorful-party-flag-falling-confetti_1314-2538.jpg?w=740&t=st=1688796292~exp=1688796892~hmac=a3ed3e24b044f12512e6119a9e9eea07a9f0248956067f442319f48ace9d0b9a'></img></SwiperSlide>
      
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>APPRECIATION</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/public-approval-concept_23-2148402713.jpg?t=st=1688809110~exp=1688809710~hmac=2208e09880c183bbced2d1105d891968e8e41ea70165680beece3d0d88cce047'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/many-people-congratulate-winner-holding-their-thumbs-up-hand-drawn-sketch-vector-illustration_460848-15390.jpg?w=740&t=st=1688809398~exp=1688809998~hmac=ac268604566f9d6611deba072ae7bdfa7d6e3db6215a53e41f159fa5da11e6ff'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/word-art-vector-you-complete-me-doodle-lettering-colorful_53876-177448.jpg?w=740&t=st=1688809563~exp=1688810163~hmac=54a6e25c9d6eb8ac8542a70e9f67b3e098b1b6b0e7cd47bb28b845fd668a7155'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/gradient-colorful-comic-text-effect_79603-1882.jpg?w=740&t=st=1688809784~exp=1688810384~hmac=7ebfc11d57df912f043dc80241033bab9b83f1a291d02426e6df3c0119371baf'></img></SwiperSlide>
      
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>PARENTS DAY</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/colorful-best-papa-message-fathers-day_1017-38542.jpg?w=740&t=st=1688809950~exp=1688810550~hmac=31a5a7af5e83a8012805ace7824520275a459a3f3fe2582d80b00b0e00ac1e3e'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/flat-father-s-day-background_23-2149384145.jpg?w=740&t=st=1688810098~exp=1688810698~hmac=7008761532533f370cce01823864aeb9517f4c081fe485b3972b2cf0be201522'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/happy-parents-day-with-background_1308-133048.jpg?w=740&t=st=1688810139~exp=1688810739~hmac=3b4f3ce63de2e7200af6aebbef018eaa427e7870ae5ba302304ec14100f0a208'></img></SwiperSlide>
       
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>FRIENDSHIP DAY</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/hand-drawn-friendship-day-background-with-friends-fist-bumping_23-2149430359.jpg?w=740&t=st=1688810344~exp=1688810944~hmac=f64334bf98db2fd7f9fef44ef69fc09d68b07c02e5595590a17bc56c52530bd2'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/international-friendship-day-illustration_52683-63295.jpg?w=740&t=st=1688810417~exp=1688811017~hmac=994c4db0f6771f5c68fa6576a0130f95956ded0f175d0c4b5f5087ffcf463253'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/hand-drawn-friendship-day-text-illustration_52683-119900.jpg?w=740&t=st=1688810541~exp=1688811141~hmac=83db9572a7dc8d892a7828f63ea917b4f767173bab5bb2ec8416fa431570e703'></img></SwiperSlide>
     
      </Swiper>
</div>
<div className='m-10'>
<h1 className='text-2xl text-start pb-5 font-bold'>ANYTIME</h1>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/minimal-logo-element-collection-two-colors_23-2148378044.jpg?w=740&t=st=1688810809~exp=1688811409~hmac=11859a48b0d07289e3e29dfa8108f534c41b8561555d58b89a84e1c5cdf7b8e3'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/typography-coffee-time-retro-style_36662-1141.jpg?w=740&t=st=1688810892~exp=1688811492~hmac=65bb2eff8f5ab05ed84de769c9f16ad13ae5671512314be7b6a08ddeb6e4c39e'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://images.pexels.com/photos/1435750/pexels-photo-1435750.jpeg?auto=compress&cs=tinysrgb&w=600'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-cold-brew-coffee-ad_52683-45847.jpg?w=740&t=st=1688811082~exp=1688811682~hmac=1d9ce7bd539e8a394e9b70bd17142441f8eb6eecd94dcf29c7167a3065660459'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-47493.jpg?w=740&t=st=1688811195~exp=1688811795~hmac=e9c69caff1c9937d59b67bd081cc8465cb71efa91c48cff56e0dcd59b13e5180'></img></SwiperSlide>
        <SwiperSlide><img className='' src='https://img.freepik.com/free-vector/realistic-coffee-background_79603-1650.jpg?w=740&t=st=1688811222~exp=1688811822~hmac=cc3dd290d5786dbbe00d944dbc845185bfd92fc17ba5b3ef7defa6f2b9bc9eca'></img></SwiperSlide>
        
      </Swiper>
</div>
<div className='m-10 bg-slate-100 '>
<div class=" p-10  grid grid-cols-2 gift">
  <div>
    <img className=' cardswi' src='https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg'></img>
  </div>
 
  <div className='text-start ml-12'>
    <h1 className='text-3xl font-bold'>Gift Cards in Bulk</h1>
    <p>There’s an easier way to buy Starbucks Cards in reward, </p>
    <p> bulk! Give a Starbucks Card to gift,</p>
    <p> incentivize, or show appreciation towards your customers,</p>
    <p>clients and team members.</p>
    
  </div>
</div>
</div>
      </div>
     
    );
};

export default GFift;
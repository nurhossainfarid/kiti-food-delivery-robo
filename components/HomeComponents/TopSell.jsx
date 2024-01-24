'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Fooditems } from '@/constants';
  import FoodItem from '../shared/FoodItem';

  import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';


const TopSell = () => {
  return (
    <section className='flex flex-col   items-center justify-center  h-full p-5 w-full '>

    <div  className='text-center space-y-2  ' >
      <h2 className='text-4xl font-semibold text-deep_blue ' >Our Top Selling Items</h2>
      <p>Based on customer Choice</p>
      

     
        
     <div className="w-full mt-10 " >

      <p>Swipe Left or right to see the items</p>
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        // className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  "
        style={{
          width:'90vw',
          paddingTop:'20px',
          paddingBottom:'50px'
        }}
      >
        {
          Fooditems.map((item) =>  <SwiperSlide
           style={{
            backgroundPosition: 'center',
            backgroundSize:'cover',
            width:'375px',
            height:'full',
            
          }} 
          key={item.id} >
            <FoodItem item={item} />
            </SwiperSlide> )
        }
      </Swiper>
     </div>
      </div>
    
      

      

     
    </section>
  )
}

export default TopSell
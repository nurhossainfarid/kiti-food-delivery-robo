
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Fooditems } from '@/constants';
  import FoodItem from '../shared/FoodItem';


const TopSell = () => {
  return (
    <section className='flex flex-col   items-center justify-center  h-full p-5 linear-gradient(to right, rgb(165, 243, 252), rgb(34, 211, 238)) '>

    <div  className='text-center space-y-2  ' >
      <h2 className='text-4xl font-semibold text-deep_blue ' >Our Top Selling Items</h2>
      <p>Based on customer Choice</p>
      

      <div  className='p-5' >
        
      <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-lg   mt-16  "
    >
      <CarouselContent className="-mt-1 h-[300px]">
        {Fooditems.map((item, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
                <FoodItem item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    
      </div>

      

     
    </section>
  )
}

export default TopSell
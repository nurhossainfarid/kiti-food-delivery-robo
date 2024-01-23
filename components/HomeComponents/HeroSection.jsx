import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
      <section className='bg-[#DCEBF9] w-full h-screen ' >
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
             <Image src={'/assets/Kiti1.png'}  width={700} height={600} className='backdrop-blur' alt='kiti_hero_Image' />
          </div>
          <div>
            <h1 className="text-5xl font-bold"><span className='text-deep_blue'>Your Favorite</span> <span className='text-secondary' >Food</span> <span className='text-primary' >Delivery Assistant</span></h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <Button className='bg-primary' >Order Now</Button>
          </div>
        </div>
      </div>
      </section>
  )
}

export default HeroSection
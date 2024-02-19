"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "./style.css";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

// import required modules
import { Button } from "@/components/ui/button";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

const AboutPage = () => {
  return (
    <div className="bg-sky-100 p-5 md:py-10 md:px-10 lg:px-20 flex flex-col gap-10 md:gap-16 lg:gap-28">
      <section className="">
        <h1 className="text-2xl md:text-4xl font-bold text-deep_blue text-center mb-3">
          About Us
        </h1>
        <p className="text-deep_blue text-center text-sm md:text-lg">
          Learn more about us.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-5/12 order-2 lg:order-1">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold 
          text-deep_blue mb-5 md:mb-10"
          >
            Robotics Lab
          </h1>
          <p className="text-sm md:text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            natus autem aspernatur vitae incidunt minus magni esse optio velit!
            Quia rem ullam officia veritatis, praesentium molestiae iste tenetur
            sint asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi natus autem aspernatur vitae incidunt minus magni
            esse optio velit! Quia rem ullam officia veritatis, praesentium
            molestiae iste tenetur sint asperiores. Lorem ipsum dolor sit amet.
          </p>
          <div className="mt-10 flex gap-10">
            <Button
              className="bg-primary hover:bg-deep_blue duration-300 
            hover:scale-110 "
            >
              Read More
            </Button>
            <Button
              className="hover:bg-primary bg-deep_blue duration-300 
            hover:scale-110 "
            >
              Order Food
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-7/12 order-1 lg:order-12">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper_slide">
              <img
                src="https://i.ibb.co/cYyPJBj/322733638-588320723135399-4255754482603456451-n.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
              <img
                src="https://i.ibb.co/jLpR5vt/144396528-10158270962907203-2704272389211756919-n.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
              <img
                src="https://i.ibb.co/w00QQTY/143612997-10158270962587203-2482701882574694851-n.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div>
          <h1
            className="text-2xl md:text-4xl text-deep_blue 
          font-bold text-center mb-3"
          >
            Our Team
          </h1>
          <p className="text-deep_blue text-center text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ipsum.
          </p>
        </div>
        <h1
          style={{ letterSpacing: "12px" }}
          className="text-2xl md:text-4xl text-center text-primary font-bold 
          py-10"
        >
          Advisor Panel
        </h1>
        <div className="bg-transparent w-9/12 mx-auto">
          <Carousel className="w-full max-w-sm sm:max-w-none mx-auto">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 
                      lg:basis-1/3 p-10"
                >
                  <div
                    className="card card-compact w-96 bg-sky-100 
                    shadow-xl"
                  >
                    <figure className="swiper_slide2_img">
                      <img
                        className=""
                        src=""
                        alt=""
                      />
                    </figure>
                    <div
                      className="card-body hover:scale-110 duration-300 
                ease-in-out"
                    >
                      <p className="text-primary text-center text-md">
                        Research Assistant
                      </p>
                      <h2
                        className="font-bold text-deep_blue 
                  text-center text-2xl"
                      >
                        Nur Hossain Farid
                      </h2>
                      <div className="card-actions justify-center mt-5 gap-5">
                        <FaGithub className="text-2xl hover:text-primary" />
                        <FaFacebook className="text-2xl hover:text-primary" />
                        <FaLinkedin className="text-2xl hover:text-primary" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center md:mt-10">
            <Button
              className="bg-primary hover:bg-deep_blue hover:scale-110 duration-300 
            ease-in-out"
            >
              View Whole Team
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 justify-center items-center">
        <h1 className="text-4xl text-deep_blue font-bold">
          Other Robots Developed By Us
        </h1>
        <img
          src="https://i.ibb.co/ZmCH5VT/50327611-221923692022614-1140279294140874752-n.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default AboutPage;

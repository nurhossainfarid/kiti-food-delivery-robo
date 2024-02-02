"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="bg-sky-100 py-10 px-20 flex flex-col gap-28">
      <section className="">
        <h1 className="text-4xl font-bold text-deep_blue text-center mb-3">
          About Us
        </h1>
        <p className="text-deep_blue text-center text-lg">
          Learn more about us.
        </p>
      </section>
      <section className="flex gap-16">
        <div className="w-5/12">
          <h1 className="text-5xl font-bold text-deep_blue mb-10">
            Robotics Lab
          </h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            natus autem aspernatur vitae incidunt minus magni esse optio velit!
            Quia rem ullam officia veritatis, praesentium molestiae iste tenetur
            sint asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi natus autem aspernatur vitae incidunt minus magni
            esse optio velit! Quia rem ullam officia veritatis, praesentium
            molestiae iste tenetur sint asperiores. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eligendi natus autem aspernatur vitae
            incidunt minus magni esse optio velit! Quia rem ullam officia
            veritatis, praesentium molestiae iste tenetur sint asperiores.
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
        <div className="w-7/12">
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
          <h1 className="text-4xl text-deep_blue font-bold text-center mb-3">
            Our Team
          </h1>
          <p className="text-deep_blue text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            ipsum.
          </p>
        </div>
        <h1 style={{ letterSpacing: '12px' }}
          className="text-4xl text-center text-primary font-bold 
          py-10">Advisor Panel</h1>
        <div className="bg-transparent">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>
            <SwiperSlide className="swiper_slide2 ">
              <div
                className="card card-compact w-96 bg-sky-100 shadow-xl 
               "
              >
                <figure className="">
                  <img
                    className=""
                    src="https://i.ibb.co/cYHfQ7m/New-File-15.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body hover:scale-110 duration-300 
                ease-in-out">
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
            </SwiperSlide>

          </Swiper>
          <div className="flex justify-center md:mt-10">
            <Button className="bg-primary hover:bg-deep_blue hover:scale-110 duration-300 
            ease-in-out">View Whole Team</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 justify-center items-center">
        <h1 className="text-4xl text-deep_blue font-bold">Other Robots Developed By Us</h1>
        <img src="https://i.ibb.co/ZmCH5VT/50327611-221923692022614-1140279294140874752-n.jpg" alt="" />
      </section>
    </div>
  );
};

export default AboutPage;

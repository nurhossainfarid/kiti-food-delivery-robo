"use client";
import FoodItem from "../shared/FoodItem";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { useData } from "@/hooks/useData";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const HomeFoodItems = () => {
  const { data: foodsData } = useData("http://203.190.8.197/food/foods");
  return (
    <section className="flex flex-col items-center justify-center h-full p-5 md:p-16 
     w-full">
      <div className="text-center space-y-2  ">
        <div className="mb-5 md:mb-10">
          <h2 className="text-4xl font-bold text-deep_blue ">
            Our Food Items
          </h2>
          <p className="text-deep_blue">Order your favourite food</p>
        </div>
        <div className="w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            // className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  "
            style={{
              width: "100vw",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            {foodsData.slice(0, 7)?.map((item) => (
              <SwiperSlide
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "375px",
                  height: "full",
                }}
                key={item.id}
              >
                <FoodItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeFoodItems;

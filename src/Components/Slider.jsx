import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <h1>Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <h1>Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <h1>Slide 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            <h1>Slide 4</h1>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

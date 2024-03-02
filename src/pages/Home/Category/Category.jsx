import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11am to 10pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/5Wy8sPT/Untitled-design-6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/PDmfW6v/Untitled-design-5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/pWrH1Dh/Untitled-design-4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/xFFVjRz/Untitled-design-9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BsfkQJD/Untitled-design-8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jwNdfpr/Untitled-design-7.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

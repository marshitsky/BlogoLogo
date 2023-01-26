import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { getAllArticles, useAppSelector } from "store";
import { StyledSwiper } from "./styles";
import { Slide } from "components";
import { SwiperSlide } from "swiper/react";
import { IBlogItem } from "types";

interface SliderProps {
  blogItem: IBlogItem;
}

export const Slider = ({ blogItem }: SliderProps) => {
  const { news } = useAppSelector(getAllArticles);

  return (
    <StyledSwiper
      slidesPerView="auto"
      spaceBetween={30}
      centeredSlides={false}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {Array.isArray(blogItem)
        ? blogItem.map((blogItem) => {
          return (
            <SwiperSlide key={blogItem.id} style={{ maxWidth: 300 }}>
              <Slide blogItem={blogItem} />
            </SwiperSlide>
          );
        })
        : news.map((blogItem) => {
          return (
            <SwiperSlide key={blogItem.id} style={{ maxWidth: 300 }}>
              <Slide blogItem={blogItem} />
            </SwiperSlide>
          );
        })}
    </StyledSwiper>
  );
};

import { Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getAllArticles, useAppSelector } from "store";
import { StyledSwiper } from "./styles";
import { Slide } from "components";
import { SwiperSlide } from "swiper/react";
import { useWindowSize } from "hooks";
import { IBlogItem } from "types";

interface SliderProps {
  blogItem: IBlogItem;
}

export const Slider = ({ blogItem }: SliderProps) => {
  const { news } = useAppSelector(getAllArticles);
  const { width = 0 } = useWindowSize();
  const setSlidesQuantity = () => {
    if (width >= 1135) return 3;
    if (width >= 768) return 2;
    if (width < 768) return 1;
  };

  return (
    <>
      <StyledSwiper
        slidesPerView={setSlidesQuantity()}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Array.isArray(blogItem)
          ? blogItem.map((blogItem) => {
            return (
              <SwiperSlide key={blogItem.id} style={{ borderRadius: 16 }}>
                <Slide blogItem={blogItem} />
              </SwiperSlide>
            );
          })
          : news.map((blogItem) => {
            return (
              <SwiperSlide key={blogItem.id} style={{ borderRadius: 16 }}>
                <Slide blogItem={blogItem} />
              </SwiperSlide>
            );
          })}
      </StyledSwiper>
    </>
  );
};

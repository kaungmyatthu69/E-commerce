"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useProducts } from "@/hooks/useProducts";
import type { Swiper as SwiperClass } from "swiper/types";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
const Testimonimals = () => {
  const { data, isLoading, error } = useProducts();

  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const onSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
  };

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="pt-16">
      <h2 className="text-center font-header text-[26px]">Testimonials</h2>
      <div className="relative p-7 lg:mt-10 lg:p-0">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            // el: ".swiper-pagination",
            type: "bullets",
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={onSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((product: any) => (
            <SwiperSlide key={product.id}>
              <div className="z-10 mb-12 flex h-[326px] flex-col items-center justify-center gap-4 rounded border border-[#E4E4E4] p-4 px-4 py-7 shadow-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="h-24 w-24 object-contain"
                />
                <h3 className="line-clamp-1 font-bold">{product.title}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`-translate-1/2 absolute left-2 top-[11rem] z-50 flex h-9 w-9 items-center justify-center rounded-full border p-4 transition lg:-left-5 lg:top-[10rem] ${isBeginning ? "border-[#C4C4C4] opacity-50" : "cursor-pointer border-[#434343]"}`}
          disabled={isBeginning}
          onClick={goPrev} // optional
        >
          ❮
        </button>

        <button
          className="-translate-1/2 absolute right-2 top-[11rem] z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#434343] p-4 lg:-right-5 lg:top-[10rem]"
          onClick={goNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Testimonimals;

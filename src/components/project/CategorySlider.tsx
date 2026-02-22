// CategorySlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Category {
  id: string | number;
  name: { en: string; ar: string };
  image: string;
  link: string;
}

interface CategorySliderProps {
  categories: Category[];
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  const isRTL = currentLang === "ar";

  if (!categories || categories.length === 0) return null;

  return (
    <div className="w-full py-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="relative overflow-visible px-4">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-cat",
            prevEl: ".swiper-button-prev-cat",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".swiper-pagination-cat",
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1280: { slidesPerView: 6, spaceBetween: 24 },
          }}
          className="pb-12"
          key={currentLang}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link to={`trips/?category=${category.link}`} className="block w-full">
                <div
                  className={`relative aspect-square overflow-hidden rounded-2xl  transition-all duration-300 ease-in-out
                       `}
                >
                  <img
                    src={category.image}
                    alt={category.name[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Optional overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="mt-2 text-center">
                  <span
                    className={`block text-sm sm:text-base font-semibold truncate px-1 transition-colors duration-300 text-primary-600`}
                  >
                    {category.name[currentLang]}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`swiper-button-prev-cat absolute top-[45%] -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md
            text-slate-700 dark:text-slate-200 hover:bg-primary-500 hover:text-white transition-all duration-300
            hidden sm:flex ${isRTL ? "-right-5" : "-left-5"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isRTL
                  ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                  : "M15.75 19.5L8.25 12l7.5-7.5"
              }
            />
          </svg>
        </button>

        <button
          className={`swiper-button-next-cat absolute top-[45%] -translate-y-1/2 z-10
            w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md
            text-slate-700 dark:text-slate-200 hover:bg-primary-500 hover:text-white transition-all duration-300
            hidden sm:flex ${isRTL ? "-left-5" : "-right-5"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isRTL
                  ? "M15.75 19.5L8.25 12l7.5-7.5"
                  : "M8.25 4.5l7.5 7.5-7.5 7.5"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;

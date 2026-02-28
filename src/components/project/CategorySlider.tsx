"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../assets/components/ui/carousel";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
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
  const dir = currentLang === "ar" ? "rtl" : "ltr";

  if (!categories || categories.length === 0) return null;


  return (
    <div className="w-full py-8" dir={dir}>
      <div className="relative overflow-visible px-4">
        <Carousel
          dir={dir}
          opts={{ direction: dir }}
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
        >
          <CarouselContent className="ml-4 flex">
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="pl-4 flex-none w-full sm:w-1/2 lg:w-1/5"
              >
                <Link
                  to={`/trips/?category_id[]=${category.id}`}
                  className="block w-full"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 ease-in-out">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="block text-sm sm:text-base font-semibold truncate px-1 transition-colors duration-300 text-primary-600">
                      {category.name}
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySlider;

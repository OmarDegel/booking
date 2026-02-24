"use client"

import React from "react"
import { Link } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../assets/components/ui/carousel"
import { useTranslation } from "react-i18next"

export interface Category {
  id: string | number
  name: { en: string; ar: string }
  image: string
  link: string
}



const Slider: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language === "ar" ? "ar" : "en"
  const dir = currentLang === "ar" ? "rtl" : "ltr"


  return (
    <div className="w-full py-8" dir={dir}>
      <div className="relative overflow-visible px-4">
        <Carousel dir={dir} opts={{ direction: dir }}>
          <CarouselContent className="-ml-4 flex">
              <CarouselItem
                className="pl-4 flex-none w-full "
              >
                <Link
                  to={`trips/?category`}
                  className="block w-full"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 ease-in-out">
                    <img
                      src="./src/assets/images/travel.png"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="block text-sm sm:text-base font-semibold truncate px-1 transition-colors duration-300 text-primary-600">
                      dasdas
                    </span>
                  </div>
                </Link>
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Slider
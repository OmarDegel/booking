import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Gallery({ trip }: { trip: any }) {
  const { t } = useTranslation("common");
  const [activeImage, setActiveImage] = useState(0);

  const totalImages = trip.images.length;

  return (
    <div className="bg-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-20 py-4">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            to="/trips"
            className="inline-flex items-center text-black hover:text-foreground text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1 rtl:rotate-180" /> {t("trip.back_to_trips")}
          </Link>
        </div>


        {/* Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={trip.images[activeImage]}
                alt={trip.name || `Trip image ${activeImage + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            <div className="absolute bottom-3 right-3 bg-foreground/60 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
              {activeImage + 1} / {totalImages}
            </div>
          </div>

          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:w-24 lg:max-h-[400px]">
            {trip.images.map((img: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative shrink-0 w-20 h-16 lg:w-24 lg:h-18 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent opacity-60 hover:opacity-100"
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

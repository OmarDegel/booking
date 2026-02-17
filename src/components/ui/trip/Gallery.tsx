import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Gallery({ trip }: any) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-20 py-4">
        <div className="relative ">
          <div className="container mx-auto  py-4">
            <Link
              to="/trips"
              className="inline-flex items-center text-black hover:text-foreground mb-4 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1 " /> Back to Trips
            </Link>
          </div>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={trip.images[activeImage]}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <button
                  onClick={() =>
                    setActiveImage((p) =>
                      p === 0 ? trip.images.length - 1 : p - 1,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={() =>
                    setActiveImage((p) =>
                      p === trip.images.length - 1 ? 0 : p + 1,
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
                {/* Image counter */}
                <div className="absolute bottom-3 right-3 bg-foreground/60 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {activeImage + 1} / {trip.images.length}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:w-24 lg:max-h-[400px]">
                {trip.images.map((img :any, i:any) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative shrink-0 w-20 h-16 lg:w-24 lg:h-18 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary ring-2 ring-primary/30" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import { Calendar, Heart, Share } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
function Aside({ trip }: any) {
  return (
    <aside className="lg:w-1/3 w-full  top-20">
      <div className="bg-white rounded-2xl p-5 shadow-md ">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          ${trip.price}
        </h2>
        <p className="text-gray-500 text-[15px] mb-4">per person</p>
        <div className="description flex flex-col gap-3">
          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">Duration</p>
              <p className="text-sm">{trip.duration}</p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">Start</p>
              <p className="text-sm">{trip.startDate}</p>
            </div>
          </div>
          {/* <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">Group Size</p>
              <p className="text-sm">10</p>
            </div>
          </div> */}
          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">Raiting</p>
              <p className="text-sm">{trip.rating}</p>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/201019631989?text=${encodeURIComponent(
            `Hello, I would like to book this trip:
Trip: ${trip.title}
Date: ${trip.date}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="bg-green-600 text-white px-4 py-3 rounded-2xl font-medium w-full mt-4 hover:bg-green-600/80 cursor-pointer flex items-center justify-center gap-2">
            <BsWhatsapp className="h-5 w-5" />
            <span>Book Now</span>
          </button>
        </a>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-primary text-white px-4 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-primary/80 cursor-pointer">
            <Heart className="h-5 w-5" />
            Add to wishlist
          </button>
          <button
            className="flex-1 bg-secondary text-foreground px-4 py-3 rounded-2xl font-medium flex items-center justify-center gap-2
                   hover:bg-gray-400/30 cursor-pointer"
          >
            <Share className="h-5 w-5" />
            Share
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;

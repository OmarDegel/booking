import { useLoaderData, useParams } from "react-router-dom";
import { trips } from "../data/trips";
import Gallery from "../components/ui/trip/Gallery";
import { Star } from "lucide-react";
import Aside from "../components/ui/trip/Aside";
import { motion } from "framer-motion";
import Details from "../components/ui/trip/Details";

const reviewsData = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "March 2026",
    text: "An absolutely incredible experience! Everything was perfectly organized and the views were breathtaking.",
  },
  {
    name: "James K.",
    rating: 5,
    date: "February 2026",
    text: "Best trip I've ever been on. The attention to detail was remarkable. Highly recommend!",
  },
  {
    name: "Emily R.",
    rating: 4,
    date: "January 2026",
    text: "Wonderful experience overall. The accommodations were luxurious and the guides were knowledgeable.",
  },
];
function TripDetails() {

  const trip = useLoaderData();
  return (
    <div className="">
      <Gallery trip={trip} />
      <div className="bg-secondary pt-5">
        <div className="container mx-auto px-4 lg:px-20 py-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <Details trip={trip} />
              {/* <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Reviews & Ratings
                </h2>
                <div className="flex items-center gap-4 mb-6 bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-foreground">
                      {trip.rating.rate}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(trip.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {trip.reviews} reviews
                    </p>
                  </div>
                  <div className="h-16 w-px bg-border" />
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-3">
                          {s}
                        </span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full"
                            style={{
                              width: `${s === 5 ? 72 : s === 4 ? 20 : s === 3 ? 5 : 2}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {reviewsData.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-xl p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                            {r.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {r.name}
                            </p>
                            <p className="text-xs text-gray-400">{r.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: r.rating }).map((_, j) => (
                            <Star
                              key={j}
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{r.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div> */}
            </div>

            <Aside trip={trip} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;

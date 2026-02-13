import TripCard from "../components/ui/TripCard";
import Aside from "../components/ui/trips/Aside";
import { trips } from "../data/trips";

function Trips() {
  const featuredTrips = trips.filter((t) => t.featured);
  return (
    <div className=" bg-secondary">
      <div className="py-20 px-4 lg:px-20 container mx-auto">
        <div className="text-center  ">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            All Trips
          </h2>
          <p className="text-gray-400">
            Browse our full collection of curated travel experiences.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row rounded-3xl mt-10  gap-6">
          <Aside />
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredTrips.map((trip, i) => (
                <TripCard key={trip.id} trip={trip} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;

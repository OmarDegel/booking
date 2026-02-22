import { useLoaderData, useSearchParams } from "react-router-dom";
import TripCard from "../components/ui/TripCard";
import Aside from "../components/ui/trips/Aside";
import type { TTrip } from "../types/Trips.Type";

function Trips() {
  const data = useLoaderData() as any; // response كامل من الباك
  const [searchParams, setSearchParams] = useSearchParams();

  const { trips, meta, links, categories, cities } = data;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    setSearchParams(params);
  };
  return (
    <div className="bg-secondary">
      <div className="py-20 px-4 lg:px-20 container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            All Trips
          </h2>
          <p className="text-gray-400">
            Browse our full collection of curated travel experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row rounded-3xl mt-10 gap-6">
          <Aside categories={categories} cities={cities} />

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trips.map((trip: TTrip, i: number) => (
                <TripCard key={trip.id} trip={trip} index={i} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                disabled={!links.prev}
                onClick={() => goToPage(meta.current_page - 1)}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: meta.last_page }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    meta.current_page === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={!links.next}
                onClick={() => goToPage(meta.current_page + 1)}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;

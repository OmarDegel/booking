import { Delete, Eye, MapPin } from "lucide-react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hook";
import { actLikeToggle } from "../../store/wishlists/wishlistsSlice";
import { useState } from "react";
// import Pagination from "../../components/ui/Pagination";

function Favourites() {
  const data = useLoaderData() as any;
  const dispatch = useAppDispatch();

  const [wishlists, setWishlists] = useState(data.wishlists || []);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleRemove = (tripId: number) => {
    dispatch(actLikeToggle(tripId));
    setWishlists((prev: any) =>
      prev.filter((item: any) => item.trip.id !== tripId),
    );
  };

  // const goToPage = (page: number) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("page", page.toString());
  //   setSearchParams(params);
  // };

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">My Favourites</h1>

      <div className="flex flex-col gap-4">
        {wishlists.map((item: any) => {
          const trip = item.trip;
          return (
            <div
              key={trip.id}
              className="bg-white rounded-2xl shadow-card p-4 flex flex-col sm:flex-row items-start gap-4 shadow-md"
            >
              <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                <img
                  src={trip.image || "https://via.placeholder.com/150"}
                  alt={trip.name?.en || "Trip"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1 items-start">
                <h2 className="text-lg font-semibold text-foreground">
                  {trip.name?.en || "Trip"}
                </h2>

                <span className="flex items-center gap-1 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {trip.city || "Unknown"}, {trip.country || "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <Link
                  to={`/trips/${trip.link}`}
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition"
                  title="View"
                >
                  <Eye className="h-5 w-5" />
                </Link>

                <button
                  onClick={() => handleRemove(trip.id)}
                  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                  title="Remove"
                >
                  <Delete className="h-5 w-5" />
                </button>
              </div>
            </div>
          );
        })}
        {/* <Pagination links={data.links} meta={data.meta} goToPage={goToPage} /> */}
      </div>
    </div>
  );
}

export default Favourites;

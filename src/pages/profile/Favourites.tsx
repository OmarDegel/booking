import { useTranslation } from "react-i18next";
import { Delete, Eye, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { actLikeToggle } from "../../store/wishlists/wishlistsSlice";
import { useEffect, useState } from "react";
import Pagination from "../../components/ui/Pagination";
import { useFetch } from "../../hooks/useFetch";
// import Pagination from "../../components/ui/Pagination";

function Favourites() {
  const { t, i18n } = useTranslation("common");
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const lang = i18n.language;
  const { data, loading } = useFetch(`wishlist?lang=${lang}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
      lang,
    },
  });
  const [wishlists, setWishlists] = useState<any[]>([]);

  useEffect(() => {
    if (data?.wishlists) {
      setWishlists(data.wishlists);
    }
  }, [data]);
  const handleRemove = (tripId: number) => {
    dispatch(actLikeToggle(tripId));
    setWishlists((prev: any) =>
      prev.filter((item: any) => item.trip.id !== tripId),
    );
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-foreground mb-6">
            {t("profile.my_favourites")}
          </h1>

          <div className="flex flex-col gap-4">
            {wishlists.length === 0 ? (
              <div className="text-center text-gray-500 py-20 flex flex-col items-center gap-4">
                <p className="text-lg">{t("profile.no_favourites")}</p>

                <Link to="/trips">
                  <button className="mt-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    {t("profile.explore")}
                  </button>
                </Link>
              </div>
            ) : (
              wishlists.map((item: any) => {
                const trip = item.trip;
                return (
                  <div
                    key={trip.id}
                    className="bg-white rounded-2xl shadow-card p-4 flex flex-col sm:flex-row items-start gap-4 shadow-md"
                  >
                    <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                      <img
                        src={trip.image || "https://via.placeholder.com/150"}
                        alt={trip.name || "Trip"}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 items-start">
                      <h2 className="text-lg font-semibold text-foreground">
                        {trip.name || "Trip"}
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
              })
            )}

            {wishlists.length > 0 && (
              <Pagination links={data.links} meta={data.meta} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;

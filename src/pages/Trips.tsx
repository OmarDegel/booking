import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useAppSelector } from "../store/hook";
import type { TTrip } from "../types/Trips.Type";
import TripCard from "../components/ui/TripCard";
import Pagination from "../components/ui/Pagination";
import Aside from "../components/ui/trips/Aside";

function Trips() {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();


  const query = searchParams.toString();
  const url = `/trips?${query}`;

  const token = useAppSelector((state) => state.user.token);
  const lang = i18n.language;

  const { data, loading } = useFetch<{
    trips: TTrip[];
    meta: any;
    links: any;
    categories: any[];
    cities: any[];
  }>(`${url}${url.includes("?") ? "&" : "?"}lang=${lang}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
      lang,
    },
  });

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
            {t("common:trips.all_trips")}
          </h2>
          <p className="text-gray-400">
            {t("common:trips.browse_trips")}
          </p>
        </div>


        <div className="flex flex-col lg:flex-row rounded-3xl mt-10 gap-6">
          <Aside
            categories={data?.categories}
            cities={data?.cities}
            loading={loading}
          />
          {loading ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data?.trips.map((trip: TTrip, i: number) => (
                  <TripCard key={trip.id} trip={trip} index={i} />
                ))}
              </div>
              <Pagination
                links={data?.links}
                meta={data?.meta}
                goToPage={goToPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trips;

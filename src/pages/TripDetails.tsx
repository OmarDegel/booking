import { useFetch } from "../hooks/useFetch";
import Gallery from "../components/ui/trip/Gallery";
import Aside from "../components/ui/trip/Aside";
import Details from "../components/ui/trip/Details";
import  Reviews from "../components/ui/trip/Reviews";

function TripDetails() {
  const trip_link = window.location.href.split("/").pop();
  const { data, loading, error } = useFetch("trips/" + trip_link);
  if (error) {
    throw new Response(error, { status: 404 });
  }
  if (loading)
    return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
        </div>
      </div>
    );
  return (
    <div className="">
      {data.images.length > 0 && <Gallery trip={data} />}
      <div className="bg-secondary pt-5">
        <div className="container mx-auto px-4 lg:px-20 py-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <Details trip={data} />
              <Reviews data={data} />
            </div>

            <Aside trip={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;

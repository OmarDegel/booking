import { useTranslation } from "react-i18next";
import CategorySlider from "../components/project/CategorySlider";
import Trips from "../components/project/Trips";
import HomeForm from "../components/form/HomeForm";
import { useFetch } from "../hooks/useFetch";
import Slider from "../components/ui/Slider";

function Home() {
  const { t } = useTranslation();

  const settingsString = localStorage.getItem("settings");
  const dataSettings = settingsString ? JSON.parse(settingsString) : null;

  const { data, loading, error } = useFetch("home");
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${dataSettings?.home_image})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-5xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            {t("common:home.titleLine1")} <br />
            <span className="text-primary">{t("common:home.titleLine2")}</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            {t("common:home.subtitle")}
          </p>
          <HomeForm t={t} />
        </div>
      </section>
     
      <section className="py-20 container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("common:home.categories")}
          </h2>
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
          </div>
        ) : (
          <CategorySlider categories={data?.categories ?? []} />
        )}
      </section>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-10 h-10 border-4 border-t-primary border-border rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {data?.newTrips?.length > 0 && (
            <Trips trips={data.newTrips} title="newTrips" filter="is_new=1" />
          )}

          {data?.recommendedTrips?.length > 0 && (
            <Trips
              trips={data.recommendedTrips}
              title="recommendedTrips"
              filter="is_recommended=1"
            />
          )}

          {data?.featureTrips?.length > 0 && (
            <Trips
              trips={data.featureTrips}
              title="featureTrips"
              filter="is_feature=1"
            />
          )}

          {data?.offerTrips?.length > 0 && (
            <Trips
              trips={data.offerTrips}
              title="offerTrips"
              filter="is_offer=1"
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;

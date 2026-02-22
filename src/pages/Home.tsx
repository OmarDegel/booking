import { useTranslation } from "react-i18next";
import { Form, Link, useLoaderData } from "react-router-dom";
import CategorySlider from "../components/project/CategorySlider";
import travelImage from "../assets/images/travel.png";
import Trips from "../components/project/Trips";

function Home() {
  const { t } = useTranslation();
  const data: any = useLoaderData();
  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${travelImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-5xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            {t("common:home.titleLine1")}
            <br />
            <span className="text-primary">{t("common:home.titleLine2")}</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            {t("common:home.subtitle")}
          </p>

          <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-border">
            <Form className="grid grid-cols-1 md:grid-cols-4 gap-3" method="get" action="/trips">
              <input
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
                placeholder={t("common:home.where")}
                name="search"
              />

              <input
                type="min_price"
                name="min_price"
                placeholder={t("common:home.minPrice")}
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              />

              <input
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
                placeholder={t("common:home.maxPrice")}
                name="max_price"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-md hover:opacity-90 transition"
              >
                {t("common:home.search")}
              </button>
            </Form>
          </div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("common:home.categories")}
          </h2>
        </div>
        <CategorySlider categories={data.categories} />
      </section>
      {data.newTrips.length > 0 && (
        <Trips trips={data.newTrips} title="newTrips" />
      )}
      {data.newTrips.length > 0 && (
        <Trips trips={data.recommendedTrips} title="recommendedTrips" />
      )}
      {data.newTrips.length > 0 && (
        <Trips trips={data.featureTrips} title="featureTrips" />
      )}
      {data.newTrips.length > 0 && (
        <Trips trips={data.offerTrips} title="offerTrips" />
      )}
    </>
  );
}

export default Home;

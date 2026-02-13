import { useTranslation } from "react-i18next";
import { trips } from "../data/trips";
import TripCard from "../components/ui/TripCard";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const featuredTrips = trips.filter((t) => t.featured);

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/travel.png')" }}
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
                placeholder={t("common:home.where")}
              />

              <input
                type="date"
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              />

              <input
                className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
                placeholder={t("common:home.budget")}
              />

              <Link to="/trips">
                <button className="w-full h-12 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-md hover:opacity-90 transition">
                  {t("common:home.search")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("common:home.trending")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTrips.map((trip, i) => (
            <TripCard key={trip.id} trip={trip} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/trips">
            <button className="px-[30px] py-2 rounded-md text-sm font-medium transition text-foreground border border-border hover:bg-muted flex items-center gap-2">
              {t("common:home.view_all")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-4 w-4 rtl:rotate-180"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

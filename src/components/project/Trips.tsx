import React from "react";
import TripCard from "../ui/TripCard";
import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { TTrip } from "../../types/Trips.Type";

interface TripsProps {
  trips: TTrip[];
  title: string;
  filter: string
}

const Trips: React.FC<TripsProps> = ({ trips, title , filter }) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 container mx-auto px-4 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          {t(`common:home.${title}`)}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trips.map((trip: TTrip, i: number) => (
          <TripCard
            key={trip.id}
            trip={trip}
            index={i}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to={`/trips?${filter}`}>
          <button className="px-[30px] py-2 rounded-md text-sm font-medium transition text-foreground border border-border hover:bg-muted flex items-center gap-2">
            {t("common:home.view_all")}
            <ArrowBigRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Trips;

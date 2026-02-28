import {
  MapPin,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import TripTime from "./TripTime";

function Details({ trip }: any) {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language === "ar" ? "ar" : "en";


  return (
    <div className="space-y-6 mb-10">
      <span className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
        {trip.category.name}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
        {trip.name}
      </h2>

      <div className="flex flex-wrap items-center gap-4 text-[15px] text-zinc-700 my-3">
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {trip.city.name}, {trip.region.name}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {trip.rating.rate} ({trip.rating.rate_count} {t("trip.reviews_count")})
        </span>
      </div>

      <h3 className="text-2xl text-zinc-700 mt-3 mb-2">{t("trip.about_heading")}</h3>

      <div
        className="text-zinc-600 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: trip.description }}
      />
    </div>
  );
}

export default Details;

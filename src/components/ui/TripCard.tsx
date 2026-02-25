import { Clock, MapPin, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TripCard({ trip }: any) {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  return (
    <Link to={`/trips/${trip.link}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
        <div className="relative h-56 overflow-hidden">
          <img
            src={trip.image}
            alt={trip.name[currentLang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />



          <span className="absolute top-3 end-3 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm z-10">
            {trip.category.name[currentLang]}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-3.5 w-3.5" />
            {trip.city.name[currentLang]} , {trip.region.name[currentLang]}
          </div>

          <h3 className="font-semibold text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors">
            {trip.name[currentLang]}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {trip.description[currentLang]}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {trip.rating.rate}
              <span className="text-xs">
                ({trip.reviews} {t("trip.reviews")})
              </span>
            </span>

            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {trip.duration}
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-2xl font-bold text-green-600">
                ${trip.price}
              </span>

              {trip.is_offer && (
                <span className="text-sm text-muted-foreground line-through ms-2">
                  ${trip.offer_price}
                </span>
              )}

              <span className="text-sm text-muted-foreground">
                {t("trip.person")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TripCard;

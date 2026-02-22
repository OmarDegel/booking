import { Calendar, CheckIcon, Clock, MapPin, Star, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
function Details({ trip }: any) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  return (
    <div>
      <span className=" bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
        {trip.category.name[currentLang]}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
        {trip.name[currentLang]}
      </h2>
      <div className="flex items-center gap-3 text-[15px] text-zinc-700 my-3 ">
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {trip.city.name[currentLang]}, {trip.region.name[currentLang]}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {trip.rating.rate} ({trip.rating.rate_count} reviews)
        </span>
      </div>
      <h3 className="text-2xl text-zinc-700 mt-3 mb-2">About</h3>
      <p className="text-zinc-600">{trip.description[currentLang]}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">Duration</p>
          <p className="text-sm font-semibold text-foreground">5 days</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">Start Date</p>
          <p className="text-sm font-semibold text-foreground">{trip.start_date}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">End Date</p>
          <p className="text-sm font-semibold text-foreground">{trip.end_date}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Tag className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">{trip.category.name[currentLang]}</p>
          <p className="text-sm font-semibold text-foreground">{trip.category.name[currentLang]}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Trip Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-">
          <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-foreground font-medium">
              Eiffel Tower private dinner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

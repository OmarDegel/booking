import { Calendar, CheckIcon, Clock, MapPin, Star, Tag, XIcon } from "lucide-react";
function Details({ trip }: any) {
  return (
    <div>
      <span className=" bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
        {trip.category}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
        {trip.title}
      </h2>
      <div className="flex items-center gap-3 text-[15px] text-zinc-700 my-3 ">
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          Paris, Europe
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          4.7 (312 reviews)
        </span>
      </div>
      <h3 className="text-2xl text-zinc-700 mt-3 mb-2">About</h3>
      <p className="text-zinc-600">{trip.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">Duration</p>
          <p className="text-sm font-semibold text-foreground">5 days</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">Start Date</p>
          <p className="text-sm font-semibold text-foreground">Jun 10, 2026</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">End Date</p>
          <p className="text-sm font-semibold text-foreground">Jun 14, 2026</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Tag className="h-5 w-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground mb-0.5">Category</p>
          <p className="text-sm font-semibold text-foreground">City</p>
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
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Trip DrawBack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-">
          <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
              <XIcon className="w-4 h-4 text-red-600" />
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

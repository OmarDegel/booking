import { Calendar, Timer } from "lucide-react";
import { useTranslation } from "react-i18next";

function TripTime({ trip }: any) {
  const { t } = useTranslation("common");
  return (
    <>
      {trip.type === "daily" ? (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Timer className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-0.5">{t("trip_time.start_end_time")}</p>
            <p className="text-sm font-semibold text-foreground">{trip.start_time} - {trip.end_time}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-0.5">{t("trip_time.start_end_date")}</p>
            <p className="text-sm font-semibold text-foreground">{trip.start_date} - {trip.end_date}</p>
          </div>

        </>
      )}
    </>
  );
}

export default TripTime;
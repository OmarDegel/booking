import { Calendar, Timer } from "lucide-react";

function TripTime({ trip }: any) {
  return (
    <>
      {trip.type === "daily" ? (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Timer className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-0.5">Start Time , End Time</p>
            <p className="text-sm font-semibold text-foreground">{trip.start_time} - {trip.end_time}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-0.5">Start Date , End Date</p>
            <p className="text-sm font-semibold text-foreground">{trip.start_date} - {trip.end_date}</p>
          </div>

        </>
      )}
    </>
  );
}

export default TripTime;
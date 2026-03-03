import { useTranslation } from "react-i18next";
import { Calendar, PersonStanding, Share, Timer } from "lucide-react";
import { BsPeople, BsWhatsapp } from "react-icons/bs";
import WishlistButton from "../WishlistButton";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { toast } from "react-toastify";
function Aside({ trip }: any) {
  const { t } = useTranslation("common");
  const settings = JSON.parse(localStorage.getItem("settings") || "{}");
  const [, copy] = useCopyToClipboard();
  let whatis = settings.site_phone as string;
  if (whatis[0] != "2") {
    whatis = "+2" + whatis;
  }
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success(t("trip.copy_success"));
      })
      .catch(() => {
        toast.error(t("trip.copy_failed"));
      });
  };

  return (
    <aside className="lg:w-1/3 w-full  top-20 ">
      <div className="bg-white rounded-2xl p-5 shadow-md ">
        <div className="flex items-center justify-start gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            {settings.currency} {trip.price}
          </h2>
          {trip.is_offer && (
            <span className="text-sm text-muted-foreground line-through">
              {settings.currency} {trip.offer_price}
            </span>
          )}
        </div>
        <p className="text-gray-500 text-[15px] mb-4">{t("trip.per_person")}</p>
        <div className="description flex flex-col gap-3">
          {/* Group Size */}
          <div className="bg-secondary rounded-2xl flex items-center gap-3 p-3 shadow-sm">
            <BsPeople className="h-5 w-5 flex-shrink-0" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs font-medium">
                {t("trip.group_size")}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {trip.group_size}
              </p>
            </div>
          </div>

          {/* Age Range */}
          <div className="bg-secondary rounded-2xl flex items-center gap-3 p-3 shadow-sm">
            <PersonStanding className="h-5 w-5 flex-shrink-0" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs font-medium">
                {t("trip.age_range")}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {trip.min_age} {trip.max_age ? `- ${trip.max_age}` : "+"}
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl flex items-center gap-3 p-3 shadow-sm">
            <Calendar className="h-5 w-5 flex-shrink-0" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs font-medium">
                {t("trip.type")}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {trip.type}
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl flex items-center gap-3 p-3 shadow-sm">
            {trip.type === "daily" ? (
              <>
                <Timer className="h-5 w-5 flex-shrink-0 " />
                <div className="flex flex-col">
                  <p className="text-gray-400 text-xs font-medium">
                    {t("trip_time.start_end_time")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {trip.start_time} - {trip.end_time}
                  </p>
                </div>
              </>
            ) : (
              <>
                <Calendar className="h-5 w-5 flex-shrink-0 " />
                <div className="flex flex-col">
                  <p className="text-gray-400 text-xs font-medium">
                    {t("trip_time.start_end_date")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {trip.start_date} - {trip.end_date}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <a
          href={`https://wa.me/${whatis}/?text=${encodeURIComponent(
            `${t("trip.whatsapp_message")}
              ${t("trip.whatsapp_trip")}: ${trip.name}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="bg-green-600 text-white px-4 py-3 rounded-2xl font-medium w-full mt-4 hover:bg-green-600/80 cursor-pointer flex items-center justify-center gap-2">
            <BsWhatsapp className="h-5 w-5" />
            <span>{t("trip.book_now")}</span>
          </button>
        </a>

        <div className="flex gap-2 mt-4">
          <WishlistButton tripId={trip.id} />
          <button
            className="flex-1 bg-secondary text-foreground px-4 py-3 rounded-2xl font-medium flex items-center justify-center gap-2
                   hover:bg-gray-400/30 cursor-pointer"
            onClick={handleCopy(window.location.href)}
          >
            <Share className="h-5 w-5" />
            {t("trip.share")}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;

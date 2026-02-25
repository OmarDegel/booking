import { useTranslation } from "react-i18next";
import {
  Calendar,
  PersonStanding,
  Share,
} from "lucide-react";
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
  console.log(settings.site_phone);
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
            ${trip.price}
          </h2>
          {trip.is_offer && (
            <span className="text-sm text-muted-foreground line-through">
              ${trip.offer_price}
            </span>
          )}
        </div>
        <p className="text-gray-500 text-[15px] mb-4">{t("trip.per_person")}</p>
        <div className="description flex flex-col gap-3">
          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <BsPeople className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">{t("trip.group_size")}</p>
              <p className="text-sm">{trip.group_size}</p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <PersonStanding className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">{t("trip.age_range")}</p>
              <p className="text-sm">
                {trip.min_age} & {trip.max_age ? trip.max_age : trip.min_age}
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl flex gap-3 items-center p-3">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-gray-400 text-[.75rem]">{t("trip.type")}</p>
              <p className="text-sm">{trip.type}</p>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${whatis}/?text=${encodeURIComponent(
            `${t("trip.whatsapp_message")}
              ${t("trip.whatsapp_trip")}: ${trip.name.en}
              ${trip.type === "daily" ? t("trip.whatsapp_date") + ": " + trip.start_time : t("trip.whatsapp_date") + ": " + trip.start_date} `,
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

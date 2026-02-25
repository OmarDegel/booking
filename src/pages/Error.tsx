import { useTranslation } from "react-i18next";
import { Flag } from "lucide-react";
import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const { t } = useTranslation("common");
  const error: any = useRouteError();

  let title = t("error.general_title");
  let message = t("error.general_message");

  if (error) {
    if (error.status === 404) {
      title = t("error.404_title");
      message = t("error.404_message");
    } else if (error.statusText || error.message) {
      title = t("error.general_title");
      message = error.statusText || error.message;
    }
  }

  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <Flag className="w-20 h-20 mx-auto" />
        <h1 className="mt-10 !text-3xl !leading-snug md:!text-4xl">{title}</h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          {message}
        </p>
        <Link
          to="/"
          className="w-full px-4 md:w-[8rem] bg-primary hover:bg-primary/90 text-white rounded-md py-2"
        >
          {t("error.back_home")}
        </Link>
      </div>
    </div>
  );
}

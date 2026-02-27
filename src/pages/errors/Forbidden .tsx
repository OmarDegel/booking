import { Flag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function Forbidden() {
  const { t } = useTranslation("common");
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  let title = t("error.forbidden_title");
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <Flag className="w-20 h-20 mx-auto" />
        <h1 className="mt-10 !text-3xl !leading-snug md:!text-4xl">{title}</h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Forbidden;

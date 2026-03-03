import { useTranslation } from "react-i18next";
import { CheckIcon } from "lucide-react";

function About() {
  const { t } = useTranslation("common");
  const settings = JSON.parse(localStorage.getItem("settings") || "{}");
  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src={settings?.logo}
              alt="Logo"
              className="h-[340px] w-[340px] text-primary"
            />
            <div className="mt-6">
              <span className="block text-3xl font-extrabold text-primary mt-1">
                {settings?.site_title}
              </span>
            </div>
          </div>

          <div className="text-center lg:text-left rtl:lg:text-right">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {t("about.tag")}
            </span>

            <h3 className="text-2xl font-bold text-primary mb-2">{settings.site_title}</h3>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {t("about.trusted_partner")} <br />
              <span className="text-primary">
                {t("about.travel_experience")}
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl text-justify">
              {t("about.description")}
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  {t("about.best_price")}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  {t("about.seamless_booking")}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  {t("about.reliable_support")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

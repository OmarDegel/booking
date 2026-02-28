import { useState } from "react";
import CheckBox from "./CheckBox";
import { Form, useSearchParams } from "react-router-dom";
import SingleCheckBox from "../SingleCheckBox";
import { useTranslation } from "react-i18next";
function Aside({ categories, cities, loading }: any) {
  const { t } = useTranslation("common");
  const [showFilters, setShowFilters] = useState(false);
  const handleShowFilters = () => setShowFilters(!showFilters);
  const [searchParams] = useSearchParams();
  return (
    <aside className="lg:w-1/4 w-full">
      <div className="lg:hidden flex justify-end mb-3">
        <button
          onClick={handleShowFilters}
          className="bg-primary text-white px-4 py-2 rounded-2xl font-medium"
        >
          {showFilters ? t("aside.close_filters") : t("aside.show_filters")}
        </button>
      </div>
      <div
        className={`
          bg-white rounded-2xl overflow-hidden transition-all duration-300
          ${showFilters ? "max-h-[2000px] p-5" : "max-h-0 p-0 lg:p-5 lg:max-h-none"}
        `}
      >
        <div
          className={`space-y-6 transition-opacity duration-200 ${showFilters ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
        >
          <Form method="get" className="bg-white rounded-2xl p-5 space-y-6">
            <h3 className="text-lg font-semibold text-foreground">{t("aside.filters")}</h3>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">{t("aside.search")}</h4>
              <input
                type="text"
                name="search"
                defaultValue={searchParams.get("search") || ""}
                placeholder={t("aside.search_placeholder")}
                className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">{t("aside.categories")}</h4>
              {loading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <CheckBox records={categories} name="category_id[]" />
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">{t("aside.cities")}</h4>
              {loading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <CheckBox records={cities} name="city_id[]" />
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">{t("aside.another_options")}</h4>

              <SingleCheckBox name="is_offer" label={t("aside.offer")} />
              <SingleCheckBox name="is_feature" label={t("aside.featured")} />
              <SingleCheckBox name="is_new" label={t("aside.new")} />
              <SingleCheckBox name="is_recommend" label={t("aside.recommended")} />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">{t("aside.price_range")}</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="min_price"
                  placeholder={t("aside.min_price")}
                  defaultValue={searchParams.get("min_price") || ""}
                  className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="number"
                  name="max_price"
                  placeholder={t("aside.max_price")}
                  defaultValue={searchParams.get("max_price") || ""}
                  className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <button className="w-full h-10 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition">
              {t("aside.apply_filters")}
            </button>
          </Form>
        </div>
      </div>
    </aside>
  );
}

export default Aside;

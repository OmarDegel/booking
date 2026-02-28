import { Form } from "react-router-dom";

function HomeForm({ t, cities }: any) {
  return (
    <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-border">
      <Form
        className="grid grid-cols-1 md:grid-cols-4 gap-3"
        method="get"
        action="/trips"
      >
        <select
          className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
          name="city_id[]"
        >
          <option value="">{t("common:home.searchByCity")}</option>
          {cities.map((city: any) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="min_price"
          placeholder={t("common:home.minPrice")}
          className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
        />
        <input
          type="number"
          className="w-full h-12 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground text-foreground"
          placeholder={t("common:home.maxPrice")}
          name="max_price"
        />

        <button
          type="submit"
          className="w-full h-12 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-md hover:opacity-90 transition"
        >
          {t("common:home.search")}
        </button>
      </Form>
    </div>
  );
}

export default HomeForm;

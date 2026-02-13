import { useState } from "react";
import CheckBox from "./CheckBox";
const categories = ["Adventure", "Culture", "Relaxation", "Wildlife"];
const regions = ["Africa", "Asia", "Europe", "North America", "South America"];
function Aside() {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => setShowFilters(!showFilters);

  return (
    <aside className="lg:w-1/4 w-full">
      <div className="lg:hidden flex justify-end mb-3">
        <button
          onClick={handleShowFilters}
          className="bg-primary text-white px-4 py-2 rounded-2xl font-medium"
        >
          {showFilters ? "Close Filters" : "Show Filters"}
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
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Search</h4>
            <input
              type="text"
              placeholder="Search trips..."
              className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Categories</h4>
            <CheckBox records={categories} />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Regions</h4>
            <CheckBox records={regions} />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Price Range</h4>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="number"
                placeholder="Max Price"
                className="w-full h-10 px-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Sorting</h4>
            <select className="w-full h-10 px-3 rounded-lg border border-gray-300">
              <option>Top Rated</option>
              <option>1 - 3 days</option>
              <option>4 - 7 days</option>
              <option>8+ days</option>
            </select>
          </div>

          <button className="w-full h-10 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;

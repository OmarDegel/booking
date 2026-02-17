import { Delete, Eye, MapPin } from "lucide-react";

function Favourites() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">My Favourites</h1>

      <div className="bg-white rounded-2xl shadow-card p-4 flex flex-col sm:flex-row items-start gap-4 shadow-md">
        <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-gray-200 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="Trip"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-1 items-start">
          <h2 className="text-lg font-semibold text-foreground">
            Trip to Paris
          </h2>

          <span className="flex items-center gap-1 text-gray-500">
            <MapPin className="h-4 w-4" />
            Paris, Europe
          </span>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition"
            title="View"
          >
            <Eye className="h-5 w-5" />
          </button>

          <button
            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
            title="Remove"
          >
            <Delete className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favourites;

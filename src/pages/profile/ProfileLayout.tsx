import { NavLink, Outlet } from "react-router-dom";
import { Heart, User } from "lucide-react";

export default function ProfileLayout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
     ${
       isActive
         ? "bg-primary/20 text-primary"
         : "text-gray-700 hover:bg-primary/20 hover:text-primary"
     }`;

  return (
    <div className="flex flex-col bg-secondary min-h-screen">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row gap-10  px-4 lg:px-20 ">
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-accent-foreground">
                JD
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                John Doe
              </h2>
              <p className="text-gray-500 text-sm">Profile</p>
            </div>

            <nav className="space-y-2">
              <NavLink to="/profile/favourites" className={linkClass}>
                <Heart className="w-5 h-5" />
                <span>Favourites</span>
              </NavLink>
              <NavLink to="/profile" end className={linkClass}>
                <User className="w-5 h-5" />
                <span>Account Settings</span>
              </NavLink>
            </nav>
          </div>
        </aside>

        <main className="lg:w-3/4 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

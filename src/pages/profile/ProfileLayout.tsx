import {
  Navigate,
  NavLink,
  Outlet,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Heart, LogOut, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearWishlist } from "../../store/wishlists/wishlistsSlice";
import { logout } from "../../store/user/userSlice";
import { useEffect, useState } from "react";

export default function ProfileLayout() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" || navigation.state === "submitting";

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      setShouldRedirect(true);
    }
  }, [user]);

  if (shouldRedirect) {
    return <Navigate to="/login" replace />;
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? "bg-primary/20 text-primary"
        : "text-gray-700 hover:bg-primary/20 hover:text-primary"
    }`;

  function handleLogout() {
    dispatch(clearWishlist());
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="flex flex-col bg-secondary min-h-screen">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row gap-10 px-4 lg:px-20">
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold text-accent-foreground">
                {user?.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  user?.name?.charAt(0).toUpperCase()
                )}
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                {user?.name}
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
              <button
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-300 text-white w-full hover:bg-red-400"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        <main className="lg:w-3/4 w-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
              <div className="w-12 h-12 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

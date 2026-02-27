import { BsWhatsapp } from "react-icons/bs";
import { Footer, Header } from "../components/common";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { actGetSettings } from "../store/settings/settingsSlice";
import { actGetWishlist } from "../store/wishlists/wishlistsSlice";

const SETTINGS_TTL = 1000 * 60 * 10; 

function MainLayout() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const [loadingSettings, setLoadingSettings] = useState(true);
  const [wishlistLoaded, setWishlistLoaded] = useState(false);

  const settings = JSON.parse(localStorage.getItem("settings") || "{}");

  useEffect(() => {
    if (user && !wishlistLoaded) {
      dispatch(actGetWishlist()).finally(() => {
        setWishlistLoaded(true);
      });
    }
  }, [dispatch, user, wishlistLoaded]);

  useEffect(() => {
    const fetchSettings = async () => {
      const cached = localStorage.getItem("settings");
      const lastFetch = localStorage.getItem("settings_last_fetch");
      const now = Date.now();

      if (cached && lastFetch && now - Number(lastFetch) < SETTINGS_TTL) {
        setLoadingSettings(false);
        return;
      }

      setLoadingSettings(true);

      const res: any = await dispatch(actGetSettings());

      if (res.payload?.data) {
        localStorage.setItem("settings", JSON.stringify(res.payload.data));
        localStorage.setItem("settings_last_fetch", now.toString());
      }

      setLoadingSettings(false);
    };

    fetchSettings();
  }, [dispatch]);

  if (loadingSettings) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 relative">
        <Outlet />
      </main>

      <Footer />

      {settings?.whatsapp && (
        <a
          href={settings.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <BsWhatsapp className="w-11 h-11" />
        </a>
      )}
    </div>
  );
}

export default MainLayout;
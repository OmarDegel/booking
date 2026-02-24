import { BsWhatsapp } from "react-icons/bs";
import { Footer, Header } from "../components/common";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hook";
import { actGetSettings } from "../store/settings/settingsSlice";
import { getUser } from "../util/auth";
import { actGetWishlist } from "../store/wishlists/wishlistsSlice";

function MainLayout() {
  const dispatch = useAppDispatch();

  const [loadingSettings, setLoadingSettings] = useState(true);
  const settings = JSON.parse(localStorage.getItem("settings") || "{}");
  const user = getUser();

  useEffect(() => {
    if (user) {
      dispatch(actGetWishlist());
    }
  }, [dispatch, user]);

  useEffect(() => {
    const fetchSettings = async () => {
      setLoadingSettings(true);
      const res: any = await dispatch(actGetSettings());
      if (res.payload?.data) {
        localStorage.setItem("settings", JSON.stringify(res.payload.data));
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
      <a
        href={settings?.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <BsWhatsapp className="w-11 h-11" />
      </a>
    </div>
  );
}

export default MainLayout;

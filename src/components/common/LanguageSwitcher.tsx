import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import actChangeLang from "../../store/user/act/actChangeLang";
import { toast } from "react-toastify";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const settings = JSON.parse(localStorage.getItem("settings") || "{}");

  const guestLang = localStorage.getItem("guest_lang");
  const initialLang = user?.lang || guestLang || settings.site_lang || "en";

  const [currentLang, setCurrentLang] = useState(initialLang);

  useEffect(() => {
    if (user?.lang && user.lang !== currentLang) {
      setCurrentLang(user.lang);
    }
  }, [user?.lang, currentLang]);

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n]);

  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const toggleLanguage = async () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    setCurrentLang(newLang);

    if (user) {
      try {
        setLoading(true);
        await dispatch(actChangeLang(newLang)).unwrap();
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    } else {
      localStorage.setItem("guest_lang", newLang);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-2 text-foreground"
      aria-label="Switch Language"
      title={currentLang === "en" ? "Switch to Arabic" : "Switch to English"}
      disabled={loading}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-t-transparent border-primary rounded-full animate-spin" />
      ) : (
        <>
          <Languages className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:block">
            {currentLang === "en" ? "العربية" : "English"}
          </span>
        </>
      )}
    </button>
  );
}

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

  useEffect(() => {
    if (user?.lang && user.lang !== i18n.language) {
      i18n.changeLanguage(user.lang).catch((err: any) => {
        console.warn("Failed to sync user language to i18next", err);
      });
    }
  }, [user?.lang, i18n]);

  useEffect(() => {
    const currentLang = i18n.language;
    const isRtl = currentLang === "ar";

    if (document.documentElement.dir !== (isRtl ? "rtl" : "ltr")) {
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
    }
    document.documentElement.lang = currentLang;

    localStorage.setItem("lang", currentLang);
    localStorage.setItem("rtl", isRtl ? "1" : "0");
  }, [i18n.language]);

  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    try {
      setLoading(true);
      await i18n.changeLanguage(newLang);

      if (user) {
        await dispatch(actChangeLang(newLang)).unwrap();
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-2 text-foreground"
      aria-label="Switch Language"
      title={i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
      disabled={loading}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-t-transparent border-primary rounded-full animate-spin" />
      ) : (
        <>
          <Languages className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:block">
            {i18n.language === "en" ? "العربية" : "English"}
          </span>
        </>
      )}
    </button>
  );
}
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-muted rounded-full transition-colors flex items-center gap-2 text-foreground"
            aria-label="Switch Language"
            title={i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
        >
            <Languages className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:block">
                {i18n.language === "en" ? "العربية" : "English"}
            </span>
        </button>
    );
}

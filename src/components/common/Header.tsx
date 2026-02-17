import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { t } = useTranslation(["common", "auth"]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("nav.trips"), path: "/trips" },
    { name: t("nav.profile"), path: "/profile" },
  ];

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 
      ${isHome
          ? "fixed bg-transparent border-b-0"
          : "relative bg-background border-b border-border"
        }`}
    >
      <div className="flex justify-between items-center container mx-auto px-4 lg:px-20 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
          <span
            className={`${isHome ? "text-white" : "text-foreground"} font-medium`}
          >
            Booking
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul
            className={`flex items-center gap-6 text-sm font-medium ${isHome ? "text-white" : "text-foreground"
              }`}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-4 ms-4">
            <Link to="/login">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${isHome
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:bg-muted"
                  }`}
              >
                {t("auth:login")}
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors">
                {t("auth:signup")}
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isHome ? "text-white" : "text-foreground"}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border absolute w-full left-0 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm font-medium text-foreground hover:text-primary block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="flex items-center justify-between py-2 border-t border-border mt-2">
              <span className="text-sm font-medium text-muted-foreground">{t('common:theme.system')}</span>
            </li>
            <li className="flex items-center justify-between py-2 border-b border-border mb-2">
              <span className="text-sm font-medium text-muted-foreground">{t('common:change_language')}</span>
              <LanguageSwitcher />
            </li>

            <li className="flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full h-10 rounded-md px-3 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                  {t("auth:login")}
                </button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full h-10 rounded-md px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  {t("auth:signup")}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

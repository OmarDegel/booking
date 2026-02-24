import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import CheckAuth from "../ui/CheckAuth";

function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { t } = useTranslation(["common", "auth"]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const settingsString = localStorage.getItem("settings");
  const data = settingsString ? JSON.parse(settingsString) : null;
  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("nav.trips"), path: "/trips" },
  ];
  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isHome
          ? "fixed bg-transparent border-b-0"
          : "relative bg-background border-b border-border"
      }`}
    >
      <div className="flex justify-between items-center container mx-auto px-4 lg:px-20 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={`${data?.logo}`} alt="Logo" className="h-8 w-8" />
          <span
            className={`${isHome ? "text-white" : "text-foreground"} font-medium`}
          >
            {data?.site_title}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul
            className={`flex items-center gap-6 text-sm font-medium ${
              isHome ? "text-foreground" : "text-foreground"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.path} className="text-sm">
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

          <CheckAuth mobile={false} />
        </div>
        <button
          className={`md:hidden p-2 ${isHome ? "text-white" : "text-foreground"}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border absolute w-full left-0 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm font-medium  hover:text-primary block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            
            <li className="flex items-center justify-between py-2 border-b border-border mb-2">

              <LanguageSwitcher />
            </li>

           <CheckAuth mobile={true} />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

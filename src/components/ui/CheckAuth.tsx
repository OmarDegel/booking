import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUser } from "../../util/auth";
import { User } from "lucide-react";

function CheckAuth({ isHome }: { isHome: boolean }) {
  const user = getUser();
  const { t } = useTranslation();
  return user && Object.keys(user).length > 0 ? (
    <Link
      to="/profile"
      className="flex items-center gap-3 ms-4 bg-primary px-4 py-2 rounded-md hover:bg-primary/90"
    >
      <span className="flex items-center gap-1">
        <User className="h-4 w-4" />
        {user.name}
      </span>
    </Link>
  ) : (
    <div className="flex items-center gap-4 ms-4">
      <Link to="/login">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${
            isHome
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-muted"
          }`}
        >
          {t("auth:login")}
        </button>
      </Link>

      <Link to="/check-email">
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors">
          {t("auth:signup")}
        </button>
      </Link>
    </div>
  );
}

export default CheckAuth;

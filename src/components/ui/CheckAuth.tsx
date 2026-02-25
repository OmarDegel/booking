import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { User } from "lucide-react";
import { useAppSelector } from "../../store/hook";

function CheckAuth({ mobile }: { mobile?: boolean }) {
  const user = useAppSelector((state) => state.user.user);
  const { t } = useTranslation();

  if (user && Object.keys(user).length > 0) {
    return (
      <Link
        to="/profile"
        className={`flex items-center gap-3 ms-4 bg-primary px-4 py-2 rounded-md hover:bg-primary/90 ${
          mobile ? "flex-col " : ""
        }`}
      >
        <span className="flex items-center gap-1">
          <User className="h-4 w-4" />
          {user.name}
        </span>
      </Link>
    );
  }

  if (mobile) {
    return (
      <li className="flex flex-col gap-3 w-full">
        <Link to="/login" onClick={() => {}}>
          <button className="w-full h-10 rounded-md px-3 text-sm font-medium bg-primary text-secondary-foreground hover:bg-secondary/80 transition-colors">
            {t("auth:login")}
          </button>
        </Link>
        <Link to="/signup" onClick={() => {}}>
          <button className="w-full h-10 rounded-md px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            {t("auth:signup")}
          </button>
        </Link>
      </li>
    );
  }

  return (
    <div className="flex items-center gap-4 ms-4">
      <Link to="/login">
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors">
          {t("auth:login")}
        </button>
      </Link>

      <Link to="/signup">
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors">
          {t("auth:signup")}
        </button>
      </Link>
    </div>
  );
}

export default CheckAuth;
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Content from "../../components/ui/auth/Content";
import LoginForm from "../../components/form/auth/LoginForm";

function Login() {
  const { t } = useTranslation("auth");
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Content
          color="bg-primary"
          title={t("signup_title")}
          description={t("login_description")}
        />

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">{t("signin_header")}</h2>
            <p className="text-gray-400 mb-8">
              {t("signin_description")}
            </p>

            <LoginForm />
            <div className="flex flex-col items-center gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <p>{t("dont_have_account")}</p>
                <Link
                  to="/signup"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  {t("sign_up")}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <p>{t("forgot_password")}</p>
                <Link
                  to="/reset-password"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  {t("reset_password")}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


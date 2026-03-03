import { useState } from "react";
import Text from "./Text";
import { useTranslation } from "react-i18next";
import { Eye, EyeClosed } from "lucide-react";

type PasswordProps = {
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  errors?: { password?: string; confirmPassword?: string };
};
export default function PasswordAuth({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errors,
}: PasswordProps) {
  const [showPasswordF1, setShowPasswordF1] = useState(false);
  const [showPasswordF2, setShowPasswordF2] = useState(false);
  const { i18n ,t } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      <div className="relative">
        <Text
          label={t("auth:password")}
          name="password"
          type={showPasswordF1 ? "text" : "password"}
          value={password}
          onChange={setPassword}
          error={errors?.password}
          placeholder={t("auth:placeholder:password")}
        />
        <button
          type="button"
          onClick={() => setShowPasswordF1(!showPasswordF1)}
          className={`absolute ${dir === "rtl" ? "left-3 " : " right-3 "}}  top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer`}
        >
          {showPasswordF1 ? (
            <Eye className="h-5 w-5" />
          ) : (
           <EyeClosed className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="relative">
        <Text
          label={t("auth:confirm_password")}
          name="password_confirmation"
          type={showPasswordF2 ? "text" : "password"}
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors?.confirmPassword}
          placeholder={t("auth:placeholder:confirmPassword")}
        />
        <button
          type="button"
          onClick={() => setShowPasswordF2(!showPasswordF2)}
          className={`absolute ${dir === "rtl" ? "left-3 " : " right-3 "}}  top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer`}
        >
          {showPasswordF2 ? (
            <Eye className="h-5 w-5" />

          ) : (
           <EyeClosed className="h-5 w-5" />

          )}
        </button>
      </div>
    </>
  );
}

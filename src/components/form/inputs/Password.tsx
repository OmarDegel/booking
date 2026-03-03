import React, { useState } from "react";
import Text from "./Text";
import { Eye, EyeClosed } from "lucide-react";
import { useTranslation } from "react-i18next";

function Password({ erorr, password, setPassword, placeholder, label }: any) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Text
        label={label}
        name="password"
        type={showPassword ? "text" : "password"}
        error={erorr}
        value={password}
        onChange={setPassword}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`absolute ${dir === "rtl" ? "left-3 " : " right-3 "} top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer`}
      >
        {showPassword ? (
          <Eye className="h-5 w-5" />
        ) : (
          <EyeClosed className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export default Password;

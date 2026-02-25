import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Content from "../../components/ui/auth/Content";
import CheckEmail from "../../components/form/auth/CheckEmail";
import Otp from "../../components/form/auth/Otp";
import Register from "../../components/form/auth/Register";

type Step = "EMAIL" | "OTP" | "REGISTER";

function Signup() {
  const { t } = useTranslation("auth");
  const [step, setStep] = useState<Step>("EMAIL");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [temp_token, setTempToken] = useState("");
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Content
          color="bg-gradient-cta"
          title={t("signup_title")}
          description={t("signup_description")}
        />
        <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 lg:px-12 ">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">{t("signup_header")}</h2>
            <p className="text-gray-400 mb-8">
              {step === "EMAIL" && t("email_step")}
              {step === "OTP" && t("otp_step")}
              {step === "REGISTER" && t("register_step")}
            </p>


            {step === "EMAIL" && (
              <CheckEmail
                email={email}
                setEmail={setEmail}
                btnColor="bg-gradient-cta"
                setStep={setStep}
                url="check/register"
              />
            )}

            {step === "OTP" && (
              <Otp
                otp={otp}
                setOtp={setOtp}
                setStep={setStep}
                btnColor="bg-gradient-cta"
                email={email}
                setTempToken={setTempToken}
                stepValue="REGISTER"
              />
            )}

            {step === "REGISTER" && (
              <Register
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                phone={phone}
                setPhone={setPhone}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                email={email}
                temp_token={temp_token}
              />
            )}

            <div className="flex items-center justify-center mt-6">
              <p className="mr-2 text-gray-400 text-sm">
                {t("already_have_account")}
              </p>
              <Link to="/login" className="text-primary text-sm font-semibold">
                {t("sign_in")}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import { useState } from "react";
import PasswordAuth from "../../components/form/inputs/PasswordAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CheckEmail from "../../components/form/auth/CheckEmail";
import Otp from "../../components/form/auth/Otp";
type Step = "EMAIL" | "OTP" | "CHANGEPASSWORD";
function ResetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("EMAIL");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<any>({});
  const [temp_token, setTempToken] = useState("");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post("auth/rest/password", {
        email,
        password,
        password_confirmation: confirmPassword,
        token: temp_token,
      });

      if (response.data.success) {
        toast.success("password reset successfully!");

        navigate("/login");
      }
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.errors) {
        setErrors(errorData.errors);
      }
      toast.error(errorData?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex w-1/2 h-screen bg-red-300 items-center justify-center p-12 relative overflow-hidden">
          <div className="text-white text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>

            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="opacity-80 max-w-sm">
              Continue your journey with Booking. Your next adventure awaits.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">reset password</h2>
            <p className="text-gray-400 mb-8">Enter your new password</p>
            {step === "EMAIL" && (
              <CheckEmail
                email={email}
                setEmail={setEmail}
                btnColor="bg-red-300"
                setStep={setStep}
                url="forget/password"
              />
            )}

            {step === "OTP" && (
              <Otp
                otp={otp}
                setOtp={setOtp}
                setStep={setStep}
                btnColor="bg-red-300"
                email={email}
                setTempToken={setTempToken}
                stepValue="CHANGEPASSWORD"
              />
            )}
            {step === "CHANGEPASSWORD" && (
              <form className="space-y-5" onSubmit={handleChangePassword}>
                <PasswordAuth
                  password={password}
                  setPassword={setPassword}
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  errors={{
                    password: errors.password?.[0],
                    confirmPassword: errors.password_confirmation?.[0],
                  }}
                />
                <button
                  className="w-full h-12 bg-red-300 text-white rounded-md font-semibold hover:bg-red-300/80"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Reset Password"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

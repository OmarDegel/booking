import React, { useEffect, useState } from "react";
import Text from "../inputs/Text";
import { toast } from "react-toastify";
import axios from "axios";

function Otp({
  otp,
  setOtp,
  setStep,
  btnColor,
  email,
  setTempToken,
  stepValue
}: {
  otp: string;
  setOtp: (val: string) => void;
  setStep: any;
  btnColor: string;
  email: string;
  setTempToken: any
  stepValue: string
}) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post("auth/verify/otp", {
        email,
        code: otp,
      });
      if (response.data.success) {
        toast.success(response.data.message || "OTP verified successfully");
        setTempToken(response.data.data.token);
        setStep(stepValue);
      }
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.errors) {
        setErrors(errorData.errors);
      }
      toast.error(errorData?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post("auth/resend/otp", { email });
      if (response.data.success) {
        toast.success(response.data.message || "OTP sent to your email");
      }
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.errors) {
        setErrors(errorData.errors);
      }
      toast.error(errorData?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  const handleOnResend = () => {
    handleResendCode();
    setTimer(60);
  };

  return (
    <form onSubmit={handleVerifyOtp} className="space-y-4">
      <Text
        label="Verification Code"
        name="otp"
        value={otp}
        onChange={(val) => setOtp(val)}
        error={errors.code?.[0]}
        placeholder="Enter 6-digit code"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full h-11 ${btnColor} text-white rounded-md font-semibold cursor-pointer hover:opacity-80 transition`}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>

      <button
        type="button"
        onClick={() => setStep("EMAIL")}
        className="w-full text-center text-sm text-primary hover:text-primary/50 mt-2  "
      >
        Change Email
      </button>

      <button
        type="button"
        onClick={handleOnResend}
        disabled={timer > 0}
        className={`w-full text-center text-sm mt-2 ${
          timer > 0
            ? "text-gray-400 cursor-not-allowed"
            : "text-primary hover:text-primary"
        }`}
      >
        Resend Code {timer > 0 && `(${timer}s)`}
      </button>
    </form>
  );
}

export default Otp;

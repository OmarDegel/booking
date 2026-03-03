import { toast } from "react-toastify";
import Text from "../inputs/Text";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

type CheckEmailProps = {
  email: string;
  setEmail: (val: string) => void;
  btnColor: string;
  setStep: any;
  url: string;
};

function CheckEmail({
  email,
  setEmail,
  btnColor,
  setStep,
  url,
}: CheckEmailProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post(`auth/${url}`, { email });
      if (response.data.success) {
        toast.success(response.data.message || "OTP sent to your email");
        setStep("OTP");
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
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSendOtp} className="space-y-4">
      <Text
        label={t("auth:email")}
        placeholder={t("auth:placeholder:email")}
        name="email"
        type="email"
        value={email}
        onChange={(val) => setEmail(val)}
        error={errors.email?.[0]}
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full h-11 ${btnColor} text-white rounded-md font-semibold cursor-pointer hover:opacity-80 transition`}
      >
        {loading ? t("auth:loading") : t(`auth:send_otp`)}
      </button>
    </form>
  );
}

export default CheckEmail;

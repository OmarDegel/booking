import { useNavigate } from "react-router-dom";
import PasswordAuth from "../inputs/PasswordAuth";
import Text from "../inputs/Text";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../store/hook";
import { setAuth } from "../../../store/user/userSlice";
import { useTranslation } from "react-i18next";

function Register({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  email,
  temp_token,
}: any) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const dispatch = useAppDispatch();
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post("auth/register", {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        password,
        password_confirmation: confirmPassword,
        register_token: temp_token,
      });

      if (response.data.success) {
        toast.success("Account created successfully!");
        dispatch(
          setAuth({
            token: response.data.data.authorisation.token,
            user: response.data.data.user,
          }),
        );
        navigate("/");
      }
    } catch (error: any) {
      const errorData = error.response?.data;
      if (errorData?.errors) {
        setErrors(errorData.errors);
      }
      toast.error(errorData?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  const { t } = useTranslation();
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Text
          label={t("auth:first_name")}
          name="first_name"
          value={firstName}
          onChange={(val) => setFirstName(val)}
          error={errors.first_name?.[0]}
          placeholder={t("auth:placeholder:first_name")}
        />
        <Text
          label={t("auth:last_name")}
          name="last_name"
          value={lastName}
          onChange={(val) => setLastName(val)}
          error={errors.last_name?.[0]}
          placeholder={t("auth:placeholder:last_name")}
        />
      </div>
      <Text
        label={t("auth:phone")}
        name="phone"
        value={phone}
        onChange={(val) => setPhone(val)}
        error={errors.phone?.[0]}
        placeholder={t("auth:placeholder:phone")}
      />
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
        type="submit"
        disabled={loading}
        className="w-full h-11 bg-gradient-cta text-white rounded-md font-semibold cursor-pointer hover:opacity-80 transition"
      >
        {loading ? t("auth:loading") : t("auth:register")}
      </button>
    </form>
  );
}

export default Register;

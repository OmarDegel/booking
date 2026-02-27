import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "../inputs/Password.tsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useAppDispatch } from "../../../store/hook";
import { setAuth } from "../../../store/user/userSlice";
import Text from "../inputs/Text.tsx";

function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    try {
      const response = await axios.post("auth/login", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success(response.data.message || "Login successful");
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
      toast.error(errorData?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form method="post" className="space-y-5" onSubmit={handleLogin}>
      <Text
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(val) => setEmail(val)}
        error={errors.email?.[0]}
      />

      <Password
        error={errors?.password?.[0]}
        password={password}
        setPassword={setPassword}
      />

      <button
        className="w-full h-12 bg-primary text-white rounded-md font-semibold hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

export default LoginForm;

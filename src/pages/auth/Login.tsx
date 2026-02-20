import { Link, redirect, useActionData, useNavigation } from "react-router-dom";
import Content from "../../components/ui/auth/Content";
import LoginForm from "../../components/form/auth/LoginForm";
import axios from "axios";
import { setAuth } from "../../util/auth";

function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Content
          color="bg-primary"
          title="Start Exploring"
          description="Continue your journey with Booking. Your next adventure awaits."
        />

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Sign in</h2>
            <p className="text-gray-400 mb-8">
              Enter your credentials to access your account
            </p>

            <LoginForm data={data} isSubmitting={isSubmitting} />
            <div className="flex flex-col items-center gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <p>Don't have an account?</p>
                <Link
                  to="/check-email"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <p>Forgot password?</p>
                <Link
                  to="/forget-password"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Reset password
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

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await axios.post("auth/login", {
      email,
      password,
    });
    if (response.data.success) {
      setAuth({
        token: response.data.data.authorisation.token,
        user: response.data.data.user,
      });
      return redirect("/");
    }
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

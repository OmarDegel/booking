import "../../server/axios.global";
import axios from "axios";
import {
  Link,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import SignupForm from "../../components/form/auth/SignupForm";
import Content from "../../components/ui/auth/Content";
import { setAuth } from "../../util/auth";

function Signup() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Content
          color="bg-gradient-cta"
          title="Start Exploring"
          description="Join thousands of travelers discovering the world with Booking."
        />
        <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 lg:px-12 ">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Sign up</h2>
            <p className="text-gray-400 mb-8">
              Complete your registration below
            </p>

            <SignupForm data={data} isSubmitting={isSubmitting} />

            <div className="flex items-center justify-center mt-6">
              <p className="mr-2">Already have an account?</p>
              <Link to="/login" className="text-primary">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;
  const password_confirmation = formData.get("password_confirmation") as string;
  const code = formData.get("code") as string;

  try {
    const response = await axios.post("auth/register", {
      first_name,
      last_name,
      email,
      phone,
      password,
      password_confirmation,
      code,
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

export default Signup;

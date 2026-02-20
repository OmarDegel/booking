import "../../server/axios.global";
import axios from "axios";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import CheckEmail from "../../components/form/auth/CheckEmail";
import Content from "../../components/ui/auth/Content";
import { useEffect } from "react";

function CheckRegister() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.success) {
      navigate("/signup", { state: { email: data.email } });
    }
  }, [data]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Content
          color="bg-gradient-cta"
          title="Start Exploring"
          description="Join thousands of travelers discovering the world with Booking."
        />
        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Sign up</h2>
            <p className="text-gray-400 mb-8">
              Enter your email to check availability
            </p>
            <CheckEmail data={data} isSubmitting={isSubmitting} />
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

export default CheckRegister;

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  try {
    const response = await axios.post("auth/check/register", { email });

    if (response.data.success === true) {
      return { success: true, email };
    }

    return response.data;
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

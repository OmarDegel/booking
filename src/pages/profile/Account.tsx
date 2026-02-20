import axios from "axios";
import { getToken, getUser, setUser } from "../../util/auth";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Text from "../../components/form/inputs/Text";
import { useEffect, useState } from "react";

function Account() {
  const data = useLoaderData();
  const res = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  useEffect(() => {
    if (res?.success) {
      setSuccessMessage("Profile updated successfully!");
      const timer = setTimeout(() => setSuccessMessage(null), 2000); 
      return () => clearTimeout(timer);
    }
  }, [res]);
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">My Account</h1>
      {successMessage && (
        <div className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-md">
          {successMessage}
        </div>
      )}

      <Form method="post">
        <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col  items-start gap-4 shadow-md">
          <h2 className="text-lg font-semibold text-foreground">
            Contact Information
          </h2>
          <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start">
            <Text
              label="Email Address"
              name="email"
              readOnly
              error={res?.errors?.email?.[0]}
              defaultValue={data?.email}
            />
            <Text
              label="Phone Number"
              name="phone"
              error={res?.errors?.phone?.[0]}
              defaultValue={data?.phone}
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-card p-7 flex flex-col items-start gap-4 shadow-md mt-6">
          <h2 className="text-lg font-semibold text-foreground">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            <Text
              label="First Name"
              name="first_name"
              defaultValue={data?.first_name}
              error={res?.errors?.first_name?.[0]}
            />
            <Text
              label="Last Name"
              name="last_name"
              error={res?.errors?.last_name?.[0]}
              defaultValue={data?.last_name}
            />

            <Text
              type="date"
              label="Date of Birth"
              name="date_of_birth"
              defaultValue={data?.date_of_birth}
              error={res?.errors?.date_of_birth?.[0]}
            />
            <div>
              <select
                name="gender"
                defaultValue={data?.gender}
                className="w-full h-11 px-3 border rounded-md text-sm transition border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              >
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {res?.errors?.gender?.[0] && (
                <p className="text-red-500 text-sm mt-1">
                  {res?.errors?.gender?.[0]}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 px-20 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </Form>
    </div>
  );
}

export default Account;

export async function loader() {
  try {
    const res = await axios.get("profile", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    if (res.data.success === true) {
      return res.data.data;
    }
    return res.data;
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
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const phone = formData.get("phone") as string;
  const date_of_birth = formData.get("date_of_birth") as string;
  const gender = formData.get("gender") as string;
  const nationality_id = formData.get("nationality_id") as string;

  try {
    const res = await axios.post(
      "profile/update",
      {
        first_name,
        last_name,
        phone,
        date_of_birth,
        gender,
        nationality_id,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (res.data.success === true) {
      setUser(res.data.data);
      return res.data;
    }
    return res.data;
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

import { Form, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import type { TActionData } from "../../../types";
import Text from "../inputs/Text";
import PasswordAuth from "../inputs/PasswordAuth";

type SignupFormProps = {
  data: TActionData;
  isSubmitting: boolean;
};

export default function SignupForm({ data, isSubmitting }: SignupFormProps) {
  const location = useLocation();

  const emailRef = useRef<string>(location.state?.email || "");
  const prefilledEmail = emailRef.current;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasFieldErrors = data?.errors && Object.keys(data.errors).length > 0;
  const showGeneralError = data?.success === false && data?.message && !hasFieldErrors;

  return (
    <Form method="post" className="space-y-1">
      {showGeneralError && (
        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-md px-4 py-3 mb-2">
          <span>{data!.message}</span>
        </div>
      )}


      <div className="grid grid-cols-2 gap-3">
        <Text
          label="First Name"
          name="first_name"
          error={data?.errors?.first_name?.[0]}
        />
        <Text
          label="Last Name"
          name="last_name"
          error={data?.errors?.last_name?.[0]}
        />
      </div>

      <Text
        label="Email Address"
        name="email"
        value={prefilledEmail}
        onChange={() => { }}
        readOnly
        error={data?.errors?.email?.[0]}
      />

      <Text
        label="Phone"
        name="phone"
        error={data?.errors?.phone?.[0]}
      />

      <PasswordAuth
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        errors={{
          password: data?.errors?.password?.[0],
          confirmPassword: data?.errors?.password_confirmation?.[0],
        }}
      />

      <Text
        label="Verification Code"
        name="code"
        error={data?.errors?.code?.[0]}
      />

      <button
        type="submit"
        className="w-full h-11 bg-gradient-cta text-white rounded-md font-semibold cursor-pointer hover:opacity-80 transition mt-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Sign Up"}
      </button>
    </Form>
  );
}

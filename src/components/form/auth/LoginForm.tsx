import { useState } from "react";
import { Form } from "react-router-dom";
import Text from "../inputs/Text";
import Password from "../inputs/Password";

function LoginForm({ data , isSubmitting }: any) {

  return (
    <Form method="post" className="space-y-5">
      <Text
        label="Email Address"
        name="email"
        error={data?.errors?.email?.[0]}
      />

      <Password data={data} />

      <button className="w-full h-12 bg-primary text-white rounded-md font-semibold hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </Form>
  );
}

export default LoginForm;

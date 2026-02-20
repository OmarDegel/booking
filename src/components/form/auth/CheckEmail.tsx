import { Form } from "react-router-dom";
import type { TActionData } from "../../../types";
import Text from "../inputs/Text";

type CheckEmailProps = {
  data: TActionData;
  isSubmitting: boolean;
};

function CheckEmail({ data, isSubmitting }: CheckEmailProps) {
  return (
    <Form method="post" className="space-y-5">
      {data && !data.success && data.message && !data.errors && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-md px-4 py-3">
          {data.message}
        </div>
      )}

      <Text
        label="Email Address"
        name="email"
        error={data?.errors?.email?.[0]}
      />

      <button
        type="submit"
        className="w-full h-12 bg-gradient-cta text-white rounded-md font-semibold cursor-pointer hover:opacity-80 transition"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Checking email..." : "Check Email"}
      </button>
    </Form>
  );
}

export default CheckEmail;

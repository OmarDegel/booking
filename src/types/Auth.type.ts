export type TActionData = {
  success?: boolean;
  message?: string;
  email?: string;
  payload?: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    code: string;
  };
  // Backend returns errors as { fieldName: ["error message", ...] }
  errors?: Record<string, string[]>;
};

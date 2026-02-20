import { useState } from "react";
import Text from "./Text";

type PasswordProps = {
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  errors?: { password?: string; confirmPassword?: string };
};
export default function PasswordAuth({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errors,
}: PasswordProps) {
  const [showPasswordF1, setShowPasswordF1] = useState(false);
  const [showPasswordF2, setShowPasswordF2] = useState(false);
  return (
    <>
      <div className="relative">
        <Text
          label="Password"
          name="password"
          type={showPasswordF1 ? "text" : "password"}
          value={password}
          onChange={setPassword}
          error={errors?.password}
        />
        <button
          type="button"
          onClick={() => setShowPasswordF1(!showPasswordF1)}
          className="absolute right-3 top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          {showPasswordF1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.1 21.1 0 0 1 5.35-5.35M3 3l18 18" />
            </svg>
          )}
        </button>
      </div>
      <div className="relative">
        <Text
          label="Confirm Password"
          name="password_confirmation"
          type={showPasswordF2 ? "text" : "password"}
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors?.confirmPassword}
        />
        <button
          type="button"
          onClick={() => setShowPasswordF2(!showPasswordF2)}
          className="absolute right-3 top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          {showPasswordF2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.1 21.1 0 0 1 5.35-5.35M3 3l18 18" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

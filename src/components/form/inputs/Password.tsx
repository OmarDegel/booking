import React, { useState } from "react";
import Text from "./Text";

function Password({ erorr ,password, setPassword }: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Text
        label="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        error={ erorr}
        value={password}
        onChange={setPassword}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-[40px]  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        {showPassword ? (
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
  );
}

export default Password;

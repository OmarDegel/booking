import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [showPasswordF1, setShowPasswordF1] = useState(false);
  const [showPasswordF2, setShowPasswordF2] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex w-1/2 h-screen bg-red-300 items-center justify-center p-12 relative overflow-hidden">
          <div className="text-white text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 mx-auto"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>

            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="opacity-80 max-w-sm">
              Continue your journey with Wanderlust. Your next adventure awaits.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">reset password</h2>
            <p className="text-gray-400 mb-8">
              Enter your new password
            </p>
            <form className="space-y-5">
              <div className="relative">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type={showPasswordF1 ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-12 px-3 border  border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordF1(!showPasswordF1)}
                  className="absolute right-3 top-1/2  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
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
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type={showPasswordF2 ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-12 px-3 border  border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordF2(!showPasswordF2)}
                  className="absolute right-3 top-1/2  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
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

              <button className="w-full h-12 bg-red-300 text-white rounded-md font-semibold hover:bg-red-300/80">
                Reset
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

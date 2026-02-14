import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex w-1/2 h-screen bg-primary items-center justify-center p-12 relative overflow-hidden">
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

            <h2 className="text-4xl font-bold">Welcome Back</h2>
            <p className="opacity-80 max-w-sm">
              Continue your journey with Booking. Your next adventure awaits.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Sign in</h2>
            <p className="text-gray-400 mb-8">
              Enter your credentials to access your account
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="relative">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 px-3 border  border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2  flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
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

              <button className="w-full h-12 bg-primary text-white rounded-md font-semibold hover:bg-primary/90">
                Sign in
              </button>
            </form>
            <div className="flex flex-col items-center gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <p>Don't have an account?</p>
                <Link
                  to="/signup"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <p>Forgot password?</p>
                <Link
                  to="/forget-password"
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Reset password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

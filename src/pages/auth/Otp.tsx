import { Link } from "react-router-dom";

function OtpPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:flex w-1/2 h-screen bg-indigo-400 items-center justify-center p-12 relative overflow-hidden">
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
              Continue your journey with Booking. Your next adventure awaits.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Otp Code</h2>
            <p className="text-gray-400 mb-8">
              Enter the otp code sent to your email
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="otp">Code</label>
                <input
                  id="otp"
                  type="otp"
                  placeholder="Enter your otp"
                  className="w-full h-12 px-3 border border-gray-300 rounded-md"
                />
              </div>

              <button className="w-full h-12 bg-indigo-400 text-white rounded-md font-semibold hover:bg-indigo-400/80">
                Verify
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;

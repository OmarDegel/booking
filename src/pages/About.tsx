import { CheckIcon } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[340px] w-[340px] text-primary"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>

            <div className="mt-6">
             
              <span className="block text-3xl font-extrabold text-primary mt-1">
                Booking
              </span>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>

            <h3 className="text-2xl font-bold text-primary mb-2">Booking</h3>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Your Trusted Partner in <br />
              <span className="text-primary">Travel Experience</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              Specialized in offering premium travel services, seamless booking,
              reliable support, and unforgettable journeys. We always strive to
              deliver excellence and satisfaction for our valued customers.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  Best Price Guarantee
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  Seamless Booking Experience
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-1 rounded-full">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-gray-700 text-lg">
                  Reliable Support & Fast Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

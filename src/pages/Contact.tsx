import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <div className=" text-center bg-secondary min-h-screen ">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="">
          <h2 className="text-[44px] md:text-[70px] text-primary font-bold">
            Contact Us
          </h2>

          <p className="text-[20px] text-gray-600 mt-6 max-w-2xl mx-auto mb-10">
            Have questions or need assistance? We're here to help! Reach out to
            us through any of the following methods:
          </p>

          <ul className="flex gap-6 justify-center mb-14">
            {socialIcons.map((item) => (
              <li key={item}>
                <Link to={item} className="group">
                  <div className="w-[70px] h-[70px] element-center border border-primary hover:bg-accent rounded-full">
                    {item === "facebook" ? (
                      <FaFacebookF className="text-[22px] group-hover:text-primary transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className="text-[22px] group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="text-[22px] group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="flex justify-center pb-24">
          <div className="bg-background p-14 rounded-3xl shadow-xl w-full max-w-3xl">
            <form className="space-y-7">
              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[64px] rounded-2xl border border-input bg-background px-6 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[64px] rounded-2xl border border-input bg-background px-6 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="w-full h-[180px] resize-none rounded-2xl border border-input bg-background px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="text-right pt-6">
                <button
                  type="submit"
                  className="bg-primary text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

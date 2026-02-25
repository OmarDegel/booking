import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("common");
  const [socialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone) {
      toast.error(t("contact.errors.phone_required"));
      return;
    }
    if (!content) {
      toast.error(t("contact.errors.message_required"));
      return;
    }
    if (!email) {
      toast.error(t("contact.errors.email_required"));
      return;
    }
    setLoading(true);
    axios
      .post("contact", { phone, email })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
        setPhone("");
        setContent("");
        setEmail("");
      });
  };
  return (
    <div className=" text-center bg-secondary min-h-screen ">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="">
          <h2 className="text-[44px] md:text-[70px] text-primary font-bold">
            {t("contact.title")}
          </h2>

          <p className="text-[20px] text-gray-600 mt-6 max-w-2xl mx-auto mb-10">
            {t("contact.subtitle")}
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

        <div className="flex justify-center pb-24">
          <div className="bg-background p-14 rounded-3xl shadow-xl w-full max-w-3xl">
            <form
              className="space-y-7"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  {t("contact.phone_label")}
                </label>
                <input
                  type="text"
                  value={phone}
                  placeholder={t("contact.phone_placeholder")}
                  className="w-full h-[64px] rounded-2xl border border-input bg-background px-6 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(val) => setPhone(val.target.value)}
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  {t("contact.email_label")}
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder={t("contact.email_placeholder")}
                  className="w-full h-[64px] rounded-2xl border border-input bg-background px-6 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(val) => setEmail(val.target.value)}
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-left mb-2">
                  {t("contact.message_label")}
                </label>
                <textarea
                  value={content}
                  placeholder={t("contact.message_placeholder")}
                  className="w-full h-[180px] resize-none rounded-2xl border border-input bg-background px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(val) => setContent(val.target.value)}
                />
              </div>

              <div className="text-right pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
                >
                  {loading ? t("contact.sending") : t("contact.send_message")}
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


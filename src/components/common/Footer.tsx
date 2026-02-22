import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MessageCircle, Phone } from "lucide-react";
import SocialIcons from "../ui/SocialIcons";

function Footer() {
  const settingsString = localStorage.getItem("settings");
  const data = settingsString ? JSON.parse(settingsString) : null;

  const [links, setLinks] = useState([
    "About",
    "Contact",
    "trips",
    "home",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[100px] md:pt-[50px] pb-[50px] text-white ">
      <div className="container mx-auto px-4 lg:px-20 py-4">
        <Link to="/">
          <img src={data?.logo} alt="Logo" className="h-8 w-8" />
        </Link>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <p className=" font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div>
            <div
              className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
            >
              <Phone className="w-[18px] h-[18px] object-contain" />
              <p>{data.site_phone}</p>
            </div>
            <div
              className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
            >
              <MessageCircle className="w-[18px] h-[18px] object-contain" />
              <p>{data.site_email}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item === "home" ? "/" : item.toLowerCase()}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

export default Footer;

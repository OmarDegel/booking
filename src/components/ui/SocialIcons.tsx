import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaSnapchatGhost,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
const settingsString = localStorage.getItem("settings");
const data = settingsString ? JSON.parse(settingsString) : {};
const socialLinks = {
  facebook: data.facebook || "",
  youtube: data.youtube   || "",
  whatsapp: data.whatsapp || "",
  snapchat: data.snapchat || "",
  instagram: data.instagram || "",
  twitter: data.twitter || "",
  tiktok: data.tiktok || "",
  telegram: data.telegram || "",
};

const iconMap = {
  facebook: (
    <FaFacebookF className="group-hover:text-primary transition-all duration-200" />
  ),
  twitter: (
    <FaTwitter className="group-hover:text-primary transition-all duration-200" />
  ),
  instagram: (
    <FaInstagram className="group-hover:text-primary transition-all duration-200" />
  ),
  youtube: (
    <FaYoutube className="group-hover:text-primary transition-all duration-200" />
  ),
  whatsapp: (
    <FaWhatsapp className="group-hover:text-primary transition-all duration-200" />
  ),
  snapchat: (
    <FaSnapchatGhost className="group-hover:text-primary transition-all duration-200" />
  ),
  tiktok: (
    <FaTiktok className="group-hover:text-primary transition-all duration-200" />
  ),
  telegram: (
    <FaTelegramPlane className="group-hover:text-primary transition-all duration-200" />
  ),
};

export default function SocialIcons() {
  return (
    <ul className="grid grid-cols-3  gap-[15px] w-full justify-center md:w-auto">
      {Object.keys(socialLinks).map((key) => (
        <li key={key}>
          <a
            href={socialLinks[key as keyof typeof socialLinks]}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="w-[40px] h-[40px] element-center border border-white rounded-full">
              {iconMap[key as keyof typeof iconMap]}
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
}

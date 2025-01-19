import { BiLogoGmail } from "react-icons/bi";
import {
  FaGithub,
  // FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const handleOpenSocialNetwork = (url: string) => () => {
  window.open(url, "_blank");
};

const handleOpenGmail = () => {
  window.location.href = `mailto:${"bandeabdelaziz3@gmail.com"}`;
};

export const socialNetworks = (size: number = 54, isFooter = false) => [
  <button
    title="linkedin"
    key="linkedin"
    onClick={handleOpenSocialNetwork(
      "https://www.linkedin.com/in/bande-abdoul-aziz/"
    )}
  >
    <FaLinkedin
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? "text-tabBarActiveTextColor" : "text-themePrimaryColor"
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="github"
    key="github"
    onClick={handleOpenSocialNetwork("https://github.com/Aziz-dev-disign")}
  >
    <FaGithub
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? "text-tabBarActiveTextColor" : "text-themePrimaryColor"
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="whatsApp"
    key="whatsApp"
    onClick={handleOpenSocialNetwork("https://wa.me/22670180874")}
  >
    <FaWhatsapp
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? "text-tabBarActiveTextColor" : "text-themePrimaryColor"
      } hover:cursor-pointer`}
    />
  </button>,
  // <button
  //   title="instagram"
  //   key="instagram"
  //   onClick={handleOpenSocialNetwork(
  //     "https://www.instagram.com/masoudouattara"
  //   )}
  // >
  //   <FaInstagramSquare
  //     size={size}
  //     className={`m-auto text-[${size}px] ${
  //       isFooter ? "text-tabBarActiveTextColor" : "text-themePrimaryColor"
  //     } hover:cursor-pointer`}
  //   />
  // </button>,
  <button title="gmail" key="gmail" onClick={handleOpenGmail}>
    <BiLogoGmail
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? "text-tabBarActiveTextColor" : "text-themePrimaryColor"
      } hover:cursor-pointer`}
    />
  </button>,
];

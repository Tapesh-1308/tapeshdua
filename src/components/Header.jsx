import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import ButtonLink from "./shared/ButtonLink";
import Logo from "../assets/logo.svg";

import { navLinks } from "../utilities/constants";

import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainBoxStyle = "flex items-center fixed top-0 w-full bg-mainBg";
  const olStyle = "flex justify-between items-center p-0 m-0 list-none";

  const toTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop */}
      <div
        className={`${mainBoxStyle} justify-between z-[11] h-[100px] backdrop-blur-md py-0 px-4 md:px-12 bg-opacity-75`}
      >
        <nav className="flex justify-between items-center relative w-full text-primaryText font-fontParagraph z-[12]">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-14 cursor-pointer transition-all hover:-translate-x-[4px] hover:-translate-y-[4px]"
            onClick={toTop}
          >
            <img
              src={Logo}
              alt="TD"
              className="w-full h-full transition-all hover:drop-shadow-buttonShadow"
            />
          </motion.div>
          <div className="hidden items-center md:flex">
            <ol className={olStyle}>
              {navLinks &&
                navLinks.map(({ url, name }, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3 + idx / 10, duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-[10px] my-0 mx-1 relative text-smallSize font-mono tracking-wide"
                  >
                    <span className="text-themeBlue mr-1 text-[12px]">
                      0{idx + 1}.
                    </span>
                    <a
                      href={url}
                      className="hover:text-themeBlue transition-all duration-200 text-[14px]"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))}
            </ol>
            <ButtonLink
              content="Resume"
              url="https://drive.google.com/file/d/11nsro2l3Z09Cdg36RCH_BxD11RTFGoH7/view"
              classNameBox="ml-[15px]"
            />
          </div>
          <motion.div
            className="flex items-center md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
            initial={{ opacity: 0, y: -5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BiMenuAltRight className="text-themeBlue text-4xl hover:brightness-50" />
          </motion.div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${mainBoxStyle} h-full z-50 justify-center transition-all duration-200 ${
          isMenuOpen ? "right-0" : "right-full"
        }`}
      >
        <motion.div
          className="absolute top-10 right-10 cursor-pointer z-[51]"
          onClick={() => setIsMenuOpen(false)}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          <IoClose className="text-themeBlue text-3xl hover:brightness-50" />
        </motion.div>
        <nav className="flex flex-col items-center gap-4 justify-center relative w-full h-full text-primaryText">
          <ol className={`${olStyle} flex-col`}>
            {navLinks &&
              navLinks.map(({ url, name }, idx) => (
                <motion.li
                  key={idx}
                  className=" p-[10px] text-lg flex flex-col items-center font-mono tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  transition={{ delay: 0.2 + idx / 20, duration: 0.3 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span className="text-themeBlue text-base mr-1">
                    0{idx + 1}.
                  </span>
                  <a
                    href={url}
                    className="hover:text-themeBlue transition-all duration-200"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
          </ol>
          <ButtonLink
            content="Resume"
            url="https://drive.google.com/file/d/11nsro2l3Z09Cdg36RCH_BxD11RTFGoH7/view"
            classNameBox="mt-[15px]"
          />
        </nav>
      </div>
    </>
  );
};

export default Header;

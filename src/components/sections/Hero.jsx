import Profile from "../../assets/profile-pic.png";
import ButtonLink from "../shared/ButtonLink";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-start flex-col justify-center pt-[150px] md:pt-[0] h-screen min-h-screen p-0 mx-auto my-0 max-w-[1000px] heroSection"
    >
      <div className="flex justify-center lg:justify-between gap-8 lg:gap-0 items-center relative flex-wrap-reverse w-full">
        <div className="flex flex-col items-center lg:items-start max-w-[45rem] lg:max-w-[30rem]">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-themeBlue text-clamp1 tracking-wider leading-loose font-mono font-normal ml-[2px]  sm:ml-[3px]"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-clamp2 m-0 font-bold text-primaryText font-fontHeading"
          >
            Tapesh Dua.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left text-clamp2 text-secondaryText font-bold font-fontHeading"
          >
            Front-End React Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left m-0 mt-[20px] text-secondaryText font-fontParagraph"
          >
            I'm a passionate front-end developer specialized in building
            exceptional web apps from Haryana, India 📍
          </motion.p>
          <ButtonLink
            content="Get In Touch!"
            url="/#contact"
            classNameBox="mt-[50px]"
            classNameBtn="px-[1.75rem] py-[1rem] text-[14px] tracking-wide"
            blank={false}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem]"
        >
          <div
            className="w-full h-full rounded-custom animate-morph border border-themeBlue bg-no-repeat"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const ButtonLink = ({
  content,
  url,
  classNameBtn = "",
  classNameBox = "",
  blank = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`transition-all ease-in-out duratio-300 hover:-translate-x-1 hover:-translate-y-1 ${classNameBox}`}
    >
      <a
        href={url}
        className={`font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow ${classNameBtn}`}
        target={blank ? "_blank" : "_self"}
      >
        {content}
      </a>
    </motion.div>
  );
};

export default ButtonLink;

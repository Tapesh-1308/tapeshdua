import MainProjectCard from "../MainProjectCard";
import { useState } from "react";
import OtherProjectCard from "../OtherProjectCard";
import { mainProjects, otherProjects } from "../../utilities/constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const limitedProjects = otherProjects.slice(0, 6);
  const projectsToShow = showMore ? otherProjects : limitedProjects;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.5, duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="projects"
        className="my-[100px] md:my-0 mx-auto py-[100px] md:mx-0"
      >
        <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
          <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
            03.
          </span>
          <h2 className="text-sectionHeading">Some Things I've Built</h2>
          <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
          <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]"></div>
        </div>

        <ul className="list-none p-0 m-0 w-full">
          {mainProjects &&
            mainProjects.map((project, idx) => (
              <MainProjectCard
                key={idx}
                project={project}
                idx={idx}
                length={mainProjects.length}
              />
            ))}
        </ul>
      </motion.section>

      <motion.section
        className="flex flex-col items-center py-[60px] px-0 sm:py-[80px] sm:px-0 my-0 mx-auto max-w-[1000px]"
        initial={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-sectionHeading m-0 mb-[10px] font-bold text-primaryText leading-[1.1]">
          Other Noteworthy Projects
        </h2>

        <ul className="list-none p-0 mt-[50px] grid grid-cols-otherProjectsSmaller lg:grid-cols-otherProjects gap-[15px] relative">
          {projectsToShow &&
            projectsToShow.map((project, idx) => (
              <OtherProjectCard project={project} key={idx} />
            ))}
        </ul>

        <button
          type="button"
          className="font-mono leading-4 text-themeBlue bg-transparent border border-themeBlue rounded-[4px] px-7 py-5 mx-auto mt-[80px] text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow hover:-translate-x-1 hover:-translate-y-1"
          onClick={() => setShowMore(!showMore)}
        >
          Show {showMore ? "Less" : "More"}
        </button>
      </motion.section>
    </>
  );
};

export default Projects;

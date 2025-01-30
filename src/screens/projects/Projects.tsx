import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { professionnalProjects, customProjects } from "./utils";
import { DownloadCVButton } from "../../components/DownloadCVButton";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export const Projects = () => {
  const data = [
    {
      label: "Professionnel",
      value: "comercial",
    },
    {
      label: "Personnel",
      value: "personal",
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full sm:px-1">
        <div className="flex flex-row items-center pt-4 pb-6 align-middle">
          <span className="html-tag">{"<b>"} </span>
          <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
            Mes{" "}
            <span className="text-xl text-themePrimaryColor sm:text-2xl">
              Projets
            </span>
          </p>
          <span className="html-tag">{"</b>"}</span>
        </div>
      </div>
      <div className="mb-8">
        <motion.button
          initial={false}
          title="Commercial projects"
          onClick={() => setActiveTab("commercial")}
          className={activeTab === "commercial" ? `btn-active` : "btn"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Professionnel
        </motion.button>
        <motion.button
          initial={false}
          title="Personal projects"
          onClick={() => setActiveTab("personal")}
          className={activeTab === "personal" ? `btn-active` : "btn"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Personnel
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-6 xxl:grid-cols-3 md:grid-cols-2"
        >
          {activeTab === "commercial" ? (
            <>
              {professionnalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </>
          ) : (
            <>
              {customProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="w-full mt-12">
        <i className="pr-4 text-lg fond-light text-primaryColor">
          Plus d'information
        </i>
        <DownloadCVButton isSmall />
      </div>
    </>
  );
};

export default Projects;

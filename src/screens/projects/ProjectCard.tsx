import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdClose, MdOutlineOpenInNew } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { Project } from "./utils";
import { mediaBreakpoints } from "../../common";
import ImgSlider from "../../components/Slider";
import { VscPreview } from "react-icons/vsc";
import { AnimatePresence, motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  isDialog?: boolean;
  isOpenDialog: boolean;
  toggleShowMore(): void;
}

const ProjectCard = ({
  project,
  isDialog = false,
  isOpenDialog,
  toggleShowMore,
}: ProjectCardProps) => {
  const displayedText = isOpenDialog
    ? project.description
    : `${project.description.slice(0, 180)}...`;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 py-4 rounded-lg sm:p-8 sm:py-6">
      {!isDialog && (
        <div className="before:absolute before:inset-0 before:rounded-lg before:bg-white before:opacity-c8 before:light:bg-black"></div>
      )}
      <div className="relative flex flex-row items-center w-full">
        <div className="flex h-24 w-24 min-w-[96px] items-center rounded-sm">
          <img src={project.img} alt={project.name} className="w-full h-full" />
        </div>
        <div className="pl-4 text-primaryColor">
          <span className="text-base font-semibold h-7 xl:text-2xl xl:font-bold">
            {project.name}
          </span>
          <div className="pt-1 text-sm font-light sm:pt-2 xl:text-base">
            <span>Stacks principales:</span>
            <div className="flex flex-row">
              {project.stack.map((item, key) => (
                <div
                  key={key}
                  className="relative flex items-center justify-center p-0 mx-0 my-2 rounded-sm group h-9 w-9 first:ml-0 hover:cursor-pointer hover:bg-white sm:mx-1 sm:p-1"
                >
                  {item}
                  <span className="absolute px-2 m-5 mx-auto mt-10 text-sm font-semibold text-center text-black transition-opacity -translate-x-1/2 translate-y-full bg-white rounded-md opacity-0 py-1/2 left-1/2 group-hover:opacity-100">
                    {item.key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full pb-4">
        {project?.git && (
          <div className="flex items-center w-full pt-4">
            <FaGithub className="mr-2 text-[30px]" />
            <a
              title="View on git hub"
              className="px-4 py-1 bg-black rounded-md text-primaryColor hover:cursor-pointer"
              href={project.git}
              target="_blank"
              rel="noreferrer"
            >
              Voir le project
            </a>
          </div>
        )}
        <div className="flex">
          {project?.url && (
            <div className="flex items-center w-full pt-2">
              <MdOutlineOpenInNew className="mr-2 text-[30px] text-themePrimaryColor" />
              <a
                className="px-1 text-base text-themePrimaryColor hover:underline"
                href={project?.url}
                target="_blank"
                rel="noreferrer"
              >
                View Demo
              </a>
            </div>
          )}

          {project?.previewBtn && isDialog && (
            <motion.div
              initial={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center w-full pt-2"
            >
              <VscPreview className="mr-2 text-[30px] text-themePrimaryColor" />
              <div
                className="px-1 text-base cursor-pointer text-themePrimaryColor hover:underline"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide preview images" : "Show preview images"}
              </div>
            </motion.div>
          )}
        </div>

        <p className="w-full pb-2 mt-4 text-base break-words text-primaryColor">
          {isDialog ? project.description : displayedText}
        </p>

        {project.description.length > 3 && !isDialog && (
          <button
            title={isOpenDialog ? "Read less" : "Read more"}
            className="absolute font-semibold text-themePrimaryColor hover:cursor-pointer"
            onClick={toggleShowMore}
          >
            {isOpenDialog ? "Read less" : "Read more"}
          </button>
        )}
        {isDialog && showPreview && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <ImgSlider />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

const ProjectCardWrapper = ({ project }: { project: Project }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return (
    <div>
      <ProjectCard
        project={project}
        isOpenDialog={showMore}
        toggleShowMore={toggleShowMore}
      />

      {showMore
        ? !mobile && (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="before:absolute before:inset-0 before:bg-white before:opacity-80"></div>

                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-bgColor focus:outline-none">
                    <div className="relative">
                      <ProjectCard
                        isDialog
                        project={project}
                        isOpenDialog={showMore}
                        toggleShowMore={toggleShowMore}
                      />
                      <button
                        title="See more"
                        className="absolute text-white right-2 top-2"
                        onClick={() => setShowMore(false)}
                      >
                        <MdClose className="text-[28px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          )
        : null}
    </div>
  );
};

export default ProjectCardWrapper;

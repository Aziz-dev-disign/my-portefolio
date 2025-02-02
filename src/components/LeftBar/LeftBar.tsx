import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { VscCloseAll } from "react-icons/vsc";

import { twMerge } from "tailwind-merge";
import { AppContext, AppContextInterface } from "../../providers/application";
import { routesLinkItems } from "../../providers/routes";

export const LeftBar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(true);

  const {
    isResponsiveTabBar,
    setResponsiveTabBar,
    aboutOpen,
    setAboutOpen,
    contactOpen,
    setContactOpen,
    projectsOpen,
    setProjectsOpen,
    technologiesOpen,
    setTechnologiesOpen,
  } = useContext(AppContext) as AppContextInterface;
  const { pdfPreviewerOpen } = useContext(AppContext) as AppContextInterface;

  const handleClickLeftBarMenuPath = (path: string) => {
    switch (path) {
      case "/about":
        setAboutOpen(true);
        break;

      case "/contact":
        setContactOpen(true);
        break;

      case "/projects":
        setProjectsOpen(true);
        break;

      case "/technologies":
        setTechnologiesOpen(true);
        break;

      default:
        break;
    }
  };

  return (
    <aside
      className={twMerge(
        `overflow-x border-t-1 fixed left-auto right-0 top-0 z-40 h-[100svh] border border-b-0 border-r-0 border-l-headerBorderColor border-r-leftSideBorder
        border-t-headerBorderColor bg-bgColor transition-all duration-200
        ease-in sm:block xl:static xl:left-12
        xl:right-auto xl:top-12 xl:w-72
        xl:border-r xl:border-t-0
        xl:border-l-leftSideBorder xl:border-r-leftSideBorder xl:transition-none`,
        ` ${isResponsiveTabBar ? "w-80" : "w-0"}`
      )}
    >
      <div className="w-full px-4 py-2">
        <div className="block font-light font-code text-textEditorColor">
          EXPLORER
        </div>
      </div>
      <button
        title="open-folder-structure"
        type="button"
        className="flex items-center w-full gap-2 px-5 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#90a4ad" /> : <FaFolder color="#90a4ad" />}

        <p>Portfolio</p>
        {/* <VscCloseAll color="#90a4ad" className="items-end"/> */}
      </button>
      {open && (
        <>
          {routesLinkItems(
            pdfPreviewerOpen,
            aboutOpen,
            contactOpen,
            projectsOpen,
            technologiesOpen
          ).map((item, key) => (
            <Link
              key={key}
              to={item?.path || "/"}
              onClick={() => {
                setResponsiveTabBar(!isResponsiveTabBar);
                handleClickLeftBarMenuPath(item?.path);
              }}
              className={`${
                pathname === item?.path && "active"
              } relative flex items-center gap-2 px-14 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor [&.active]:bg-themePrimaryColor [&.active]:text-tabBarActiveTextColor`}
            >
              {item.logo}
              {item.title}
            </Link>
          ))}
        </>
      )}
    </aside>
  );
};

export default LeftBar;

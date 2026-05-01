// import { SlPencil } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { FaFolderOpen, FaRegUserCircle } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { MdOutlineContacts } from "react-icons/md";
import { useContext } from "react";
import { AppContext, AppContextInterface } from "../../providers";
// import { SiGitlab } from "react-icons/si";

const sidebarTopItems = [
  {
    Icon: FaFolderOpen,
    iconColors: "#90a4ad",
    activeIconColrs: "#e4eaed",
    path: "/",
  },
  // {
  //   Icon: SiGitlab,
  //   iconColors: "#90a4ad",
  //   activeIconColrs: "#e4eaed",
  //   path: "/gitlab",
  // },
  {
    Icon: IoCodeSlashSharp,
    iconColors: "#90a4ad",
    activeIconColrs: "#e4eaed",
    path: "/projects",
  },
  // {
  //   Icon: SlPencil,
  //   iconColors: "#90a4ad",
  //   activeIconColrs: "#e4eaed",
  //   path: "/articles",
  // },
  {
    Icon: MdOutlineContacts,
    iconColors: "#90a4ad",
    activeIconColrs: "#e4eaed",
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: FaRegUserCircle,
    iconColors: "#90a4ad",
    activeIconColrs: "#e4eaed",
    path: "/about",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const {
    setAboutOpen,
    setProjectsOpen,
    setContactOpen,
    setTechnologiesOpen,
    themeDialogOpen,
    setThemeDialogOpen,
  } = useContext(AppContext) as AppContextInterface;

  const displayPathPage = (path: string) => {
    switch (path) {
      case "/about":
        setAboutOpen(true);
        break;
      case "/projects":
        setProjectsOpen(true);
        break;
      case "/contact":
        setContactOpen(true);
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
        "hidden",
        "xl:flex xl:flex-col border-t-1 border-b-0 border-r-0 border-l-headerBorderColor border-r-leftSideBorder justify-between border-t-headerBorderColor bg-bgColor w-[4.5vw] min-w-[40px] h-[calc(100vh-30px-35px)] md:w-[6vw] sm:w-[8vw] xs:w-[10vw]"
      )}
    >
      <div className="flex flex-col">
        {sidebarTopItems.map(
          ({ Icon, path, iconColors, activeIconColrs }, indx: number) => (
            <Link
              key={indx}
              to={path || "/"}
              onClick={() => displayPathPage(path)}
            >
              <div
                className={`w-full cursor-pointer hover:bg-sidebar-hover-bg ${pathname === path ? "border-l-2 border-themePrimaryColor" : ""}`}
              >
                <Icon
                  fill={pathname === path ? activeIconColrs : iconColors}
                  className="h-[48px] w-[48px] py-2.5 mx-auto"
                />
              </div>
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col">
        {sidebarBottomItems.map(
          ({ Icon, path, iconColors, activeIconColrs }, indx: number) => (
            <Link
              key={indx}
              to={path || "/"}
              onClick={() => displayPathPage(path)}
            >
              <div className="w-full cursor-pointer hover:bg-sidebar-hover-bg">
                <Icon
                  fill={pathname === path ? activeIconColrs : iconColors}
                  className="h-[48px] w-[48px] py-2.5 mx-auto"
                />
              </div>
            </Link>
          )
        )}
        <button
          type="button"
          title="Choisir le thème"
          aria-label="Choisir le thème"
          onClick={() => setThemeDialogOpen(!themeDialogOpen)}
          className="w-full cursor-pointer hover:bg-sidebar-hover-bg"
        >
          <CiSettings
            fill="#90a4ad"
            className="h-[48px] w-[48px] py-2.5 mx-auto"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

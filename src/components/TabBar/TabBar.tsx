import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext, AppContextInterface } from "../../providers/application";
import { RoutesLinkItems, routesLinkItems } from "../../providers/routes";

export const TabBar = ({ mobileAndTablet }: { mobileAndTablet: boolean }) => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const {
    pdfPreviewerOpen,
    setPdfPreviewerOpen,
    setAboutOpen,
    setTechnologiesOpen,
    setProjectsOpen,
    setContactOpen,
    aboutOpen,
    technologiesOpen,
    projectsOpen,
    contactOpen,
  } = useContext(AppContext) as AppContextInterface;

  const handleClose = (item: RoutesLinkItems) => {
    handleCloseSpecificTab(item);
    navigate("/");
  };

  const handleCloseSpecificTab = (item: RoutesLinkItems) => {
    switch (item?.path) {
      case "/cv":
        setPdfPreviewerOpen(false);
        break;
      case "/about":
        setAboutOpen(false);
        break;
      case "/technologies":
        setTechnologiesOpen(false);
        break;
      case "/projects":
        setProjectsOpen(false);
        break;
      case "/contact":
        setContactOpen(false);
        break;

      default:
        break;
    }
  };

  const getLink = (item: RoutesLinkItems, key: number) => (
    <Link
      key={key}
      to={item?.path || "/"}
      state={{ historyPath: state?.historyPath }}
      className={`
        ${pathname === item?.path && "active"}
        relative flex items-center gap-2 border-b border-r border-t border-b-tabBarBorderColor border-r-tabBarBorderColor border-t-tabBarBgColor bg-tabBarBgColor px-6 py-2 text-base text-textEditorColor
        hover:bg-textEditorHoverBg hover:text-textEditorHoverColor
        [&.active]:border-t-2 [&.active]:border-solid [&.active]:border-b-[none] [&.active]:border-bgColor [&.active]:bg-bgColor [&.active]:text-tabBarActiveTextColor`}
    >
      {item.logo}
      {item.title}
      {item?.closable && (
        <MdClose onClick={() => handleClose(item)} className="absolute cursor-pointer right-1 text-textEditorColor" />
      )}
    </Link>
  );

  return (
    <header className="relative flex items-end justify-between w-full mt-px h-9">
      <nav className="flex flex-row items-center h-9">
        {routesLinkItems(
          pdfPreviewerOpen,
          aboutOpen,
          contactOpen,
          projectsOpen,
          technologiesOpen
        )
          .filter((item) => item.isDisplayed)
          .map((item, key) => {
            if (mobileAndTablet) {
              const linksForResponsive = [];
              if (pdfPreviewerOpen && item.path === "/cv") {
                linksForResponsive.push(getLink(item, key));
              } else if (
                pathname === item?.path ||
                state?.historyPath === item?.path
              ) {
                linksForResponsive.push(getLink(item, key));
              }

              return linksForResponsive;
            }
            return getLink(item, key);
          })}
      </nav>
    </header>
  );
};

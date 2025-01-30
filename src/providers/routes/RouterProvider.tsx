import { useContext } from "react";
import { RouterProvider as Router } from "react-router-dom";
import { routes } from "./utils";
import { AppContext, AppContextInterface } from "../application";
// import InitialTransition from "../../components/InitPageMotion";

export const RouterProvider = () => {
  const {
    pdfPreviewerOpen,
    aboutOpen,
    contactOpen,
    projectsOpen,
    technologiesOpen,
  } = useContext(AppContext) as AppContextInterface;

  return (
    // <InitialTransition>
    <Router
      router={routes(
        pdfPreviewerOpen,
        aboutOpen,
        contactOpen,
        projectsOpen,
        technologiesOpen
      )}
    />
    // </InitialTransition>
  );
};

import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isResponsiveTabBar, setResponsiveTabBar] = useState<boolean>(false);
  const [pdfPreviewerOpen, setPdfPreviewerOpen] = useState<boolean>(false);
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
  const [technologiesOpen, setTechnologiesOpen] = useState<boolean>(false);
  const [gitlabOpen, setGitlabOpen] = useState<boolean>(false);

  const state = {
    isResponsiveTabBar,
    setResponsiveTabBar,
    pdfPreviewerOpen,
    setPdfPreviewerOpen,
    aboutOpen,
    setAboutOpen,
    contactOpen,
    setContactOpen,
    projectsOpen,
    setProjectsOpen,
    technologiesOpen,
    setTechnologiesOpen,
    gitlabOpen,
    setGitlabOpen,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;

import {createContext} from 'react';

export interface AppContextInterface {
  isResponsiveTabBar: boolean;
  setResponsiveTabBar(isResponsiveTabBar: boolean): void;

  pdfPreviewerOpen: boolean;
  setPdfPreviewerOpen(pdfPreviewerOpen: boolean): void;

  aboutOpen: boolean;
  setAboutOpen(aboutOpen: boolean): void;

  contactOpen: boolean;
  setContactOpen(contactOpen: boolean): void;

  projectsOpen: boolean;
  setProjectsOpen(projectsOpen: boolean): void;

  technologiesOpen: boolean;
  setTechnologiesOpen(technologiesOpen: boolean): void;

  gitlabOpen: boolean;
  setGitlabOpen(gitlabOpen: boolean): void;
}

export const AppContext = createContext<AppContextInterface | null>(null);

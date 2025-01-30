import { ReactElement, lazy } from "react";
import { FaFilePdf, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "../../screens";

export interface RoutesLinkItems {
  logo: ReactElement;
  title: string;
  path: string;
  closable?: boolean;
  isDisplayed?: boolean;
}

const Home = lazy(() => import("../../screens/home/Home"));
const About = lazy(() => import("../../screens/about/About"));
const Contact = lazy(() => import("../../screens/contact/Contact"));
const PdfPriever = lazy(
  () => import("../../screens/pdfPreviewer/PdfPreviewer")
);
const Projects = lazy(() => import("../../screens/projects/Projects"));
const Technologies = lazy(
  () => import("../../screens/technologies/Technologies")
);
// const Gitlab = lazy(() => import("../../screens/gitlab/gitlab"));

export const routesLinkItems = (
  pdfPreviewerOpen: boolean,
  aboutOpen: boolean,
  contactOpen: boolean,
  projectsOpen: boolean,
  technologiesOpen: boolean
): RoutesLinkItems[] => {
  const cvMenuItem = pdfPreviewerOpen
    ? [
        {
          logo: <FaFilePdf color="#C60604" />,
          title: "cv.pdf",
          path: "/cv",
          closable: true,
          isDisplayed: pdfPreviewerOpen,
        },
      ]
    : [];

  // const gitlabMenu = gitlabOpenMenu
  //   ? [
  //       {
  //         logo: <SiGitlab color="#C60604" />,
  //         title: 'gitlab.com',
  //         path: '/gitlab',
  //         closable: true,
  //       },
  //     ]
  //   : [];

  return [
    {
      logo: <FaReact color="#5ED4F4" />,
      title: "accueil.jsx",
      path: "/",
      closable: false,
      isDisplayed: true,
    },
    {
      logo: <FaHtml5 color="#DE4B25" />,
      title: "apropos.html",
      path: "/about",
      closable: true,
      isDisplayed: aboutOpen,
    },
    {
      logo: <SiTypescript color="#2F75C0" />,
      title: "stack.ts",
      path: "/technologies",
      closable: true,
      isDisplayed: technologiesOpen,
    },
    {
      logo: <VscJson color="#f1980d" />,
      title: "projets.json",
      path: "/projects",
      closable: true,
      isDisplayed: projectsOpen,
    },
    {
      logo: <SiJavascript color="#E9D54B" />,
      title: "contact.js",
      path: "/contact",
      closable: true,
      isDisplayed: contactOpen,
    },
    // {
    //   logo: <SiGitlab color="#C60604" />,
    //   title: "gitlab.com",
    //   path: "/gitlab",
    //   closable: true,
    // },
    ...cvMenuItem,
  ];
};

export const routes = (
  pdfPreviewerOpen: boolean,
  aboutOpen: boolean,
  contactOpen: boolean,
  projectsOpen: boolean,
  technologiesOpen: boolean
) => {
  return createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "*", element: <Navigate to="/" replace /> },
          {
            path: "/",
            element: <Home />,
          },
          aboutOpen
            ? {
                path: "/about",
                element: <About />,
              }
            : {},
          projectsOpen
            ? {
                path: "/projects",
                element: <Projects />,
              }
            : {},
          technologiesOpen
            ? {
                path: "/technologies",
                element: <Technologies />,
              }
            : {},
          contactOpen
            ? {
                path: "/contact",
                element: <Contact />,
              }
            : {},
          pdfPreviewerOpen
            ? {
                path: "/cv",
                element: <PdfPriever />,
              }
            : {},
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );
};

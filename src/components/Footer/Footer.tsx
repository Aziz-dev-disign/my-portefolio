import { Suspense, lazy, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext, ThemeContextInterface } from "../../providers/theme";
import { socialNetworks } from "../../screens/contact";
import { IoIosGitBranch } from "react-icons/io";
import { BiError } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const ThemeDialog = lazy(() => import("../ThemeDialog/ThemeDialog"));

export const Footer = ({ mobileAndTablet }: { mobileAndTablet: boolean }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextInterface;

  const [themeDialogOpen, setThemeDialogOpen] = useState<boolean>(false);

  const sidebarContentEl = document.getElementsByClassName("main-window")[0];

  return (
    <div className="relative flex h-[48px] w-full flex-row justify-between bg-themePrimaryColor xl:h-[24px] xl:justify-end">
      <div className="items-start hidden w-full gap-1 pr-2 md:flex md:flex-row">
        <a
          href="https://github.com/itsnitinr/vscode-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className={`flex flex-row items-center gap-1 text-bgColor mr-1`}
        >
          <IoIosGitBranch />
          <span>main</span>
        </a>
        <div className="flex items-center">
          <BiError className="" />
          <span className="">0</span>
          <VscError className="" />
          <span>0</span>
        </div>
      </div>

      {mobileAndTablet && (
        <div className="flex flex-row gap-2 pl-2">
          {socialNetworks(24, true).map((item) => item)}
        </div>
      )}

      {themeDialogOpen &&
        createPortal(
          <Suspense>
            <ThemeDialog setThemeDialogOpen={setThemeDialogOpen} />
          </Suspense>,
          sidebarContentEl
        )}
      <div
        onClick={() => setThemeDialogOpen(!themeDialogOpen)}
        className="flex flex-row items-center justify-end h-full px-2 hover:cursor-pointer"
      >
        <MdOutlineDarkMode className="pr-1 text-xl text-bgColor" />
        <span className="font-bold text-bgColor">{theme}</span>
      </div>
    </div>
  );
};

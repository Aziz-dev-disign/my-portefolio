import { Suspense, lazy, useContext } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineDarkMode } from "react-icons/md";
import { VscTerminalBash } from "react-icons/vsc";
import { ThemeContext, ThemeContextInterface } from "../../providers/theme";
import { AppContext, AppContextInterface } from "../../providers/application";
import { socialNetworks } from "../../screens/contact";
import { IoIosGitBranch } from "react-icons/io";
import { BiError } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const ThemeDialog = lazy(() => import("../ThemeDialog/ThemeDialog"));

export const Footer = ({ mobileAndTablet }: { mobileAndTablet: boolean }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext) as ThemeContextInterface;
  const {
    themeDialogOpen,
    setThemeDialogOpen,
    terminalOpen,
    setTerminalOpen,
  } = useContext(AppContext) as AppContextInterface;

  const sidebarContentEl = document.getElementsByClassName("main-window")[0];

  return (
    <div className="relative flex h-[48px] w-full flex-row justify-between bg-themePrimaryColor xl:h-[24px] xl:justify-end">
      <div className="items-start hidden w-full gap-1 pr-2 md:flex md:flex-row">
        <a
          href="https://github.com/Aziz-dev-disign/my-portefolio"
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
        <button
          type="button"
          title={t("terminal.toggle")}
          aria-label={t("footer.terminalToggle")}
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="flex items-center gap-1 rounded px-2 text-bgColor hover:bg-bgColor/15"
        >
          <VscTerminalBash />
          <span>terminal</span>
        </button>
      </div>

      {mobileAndTablet && (
        <div className="flex flex-row items-center gap-2 pl-2">
          {socialNetworks(24, true).map((item) => item)}
          <button
            type="button"
            title="Toggle terminal"
            aria-label="Toggle terminal"
            onClick={() => setTerminalOpen(!terminalOpen)}
            className="ml-1 flex items-center text-tabBarActiveTextColor hover:opacity-80"
          >
            <VscTerminalBash size={22} />
          </button>
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

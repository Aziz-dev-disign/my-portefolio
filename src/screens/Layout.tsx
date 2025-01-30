import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../providers/theme";
import { Header } from "../components/Header";
import { TabBar } from "../components/TabBar";
import { Footer } from "../components/Footer";
import { mediaBreakpoints } from "../common";

const LeftBar = lazy(() => import("../components/LeftBar/LeftBar"));
// const SocialNetworks = lazy(() => import("./SocialNetworks"));
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));

export const Layout = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <ThemeProvider>
      <div className="flex h-[100svh] w-full flex-col">
        <Header mobileAndTablet={mobileAndTablet} />

        <section className="flex flex-col-reverse w-full overflow-hidden h-content xl:flex-row">
        <Sidebar />
          {/* {!mobileAndTablet && <SocialNetworks />} */}
          <LeftBar />
          <section className="w-full h-full pb-2 overflow-hidden main-window bg-bgColor">
            <TabBar mobileAndTablet={mobileAndTablet} />

            <main className="px-4 pt-4 page-wrapper sm:px-8">
              <Suspense fallback={<div></div>}>
                <Outlet />
              </Suspense>
            </main>
          </section>
        </section>

        <Footer mobileAndTablet={mobileAndTablet} />
      </div>
    </ThemeProvider>
  );
};

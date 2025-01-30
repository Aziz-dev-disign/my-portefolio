import { lazy } from "react";
import { GrSearch } from "react-icons/gr";
import { TbBrandVscode } from "react-icons/tb";

const MenuResponsive = lazy(() => import("../TabBar/MenuResponsive"));

export const Header = ({ mobileAndTablet }: { mobileAndTablet: boolean }) => {
  return (
    <section className="top-0 left-0 flex items-center justify-between w-full pl-3 border-b h-header border-b-headerBorderColor bg-bgColor">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="hidden gap-2 text-white xl:flex text-[0.80rem]">
          <TbBrandVscode color="#2F75C0" className="text-[20px]" />
          <div>File</div>
          <div>Edit</div>
          <div>View</div>
          <div>Go</div>
          <div>Run</div>
          <div>Terminal</div>
          <div>Help</div>
        </div>
      </div>

      <div className="flex h-4/6 items-center rounded-lg border-solid blue:border-[#b9bec271] xl:border xl:pl-60 xl:pr-60">
        {!mobileAndTablet && (
          <GrSearch className="mr-2 text-xl rotate-90 text-primaryColor opacity-80" />
        )}
        <p className="justify-center text-sm font-code text-primaryColor opacity-80">
          portfolio
        </p>
      </div>

      <div>
        <MenuResponsive />
      </div>
    </section>
  );
};

export default Header;

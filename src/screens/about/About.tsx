import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { mediaBreakpoints } from "../../common";

export const About = () => {
  const { t } = useTranslation();
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex items-center w-full h-auto overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="html-tag">{"<html>"}</span>
        <br />
        <span className="pl-4 html-tag">{"<body>"}</span>
        <br />
        <span className="pl-8 html-tag">{"<h1>"}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
          {t("about.hello")}
        </h1>

        <span className="pl-8 html-tag">{"</h1>"}</span>
        <br />
        <span className="pl-8 html-tag">{"<p>"}</span>
        <p className="pb-4 pl-10 text-lg">
          {t("about.intro")}{" "}
          <span className="text-lg text-themePrimaryColor">
            Abdoul Aziz BANDE
          </span>{" "}
          {t("about.introTail")}{" "}
          <span className="text-lg text-themePrimaryColor">
            {t("about.roleAccent")}
          </span>{" "}
          {t("about.experience")}{" "}
          <span className="text-lg text-themePrimaryColor">
            {t("about.stackAccent")}
          </span>
          .
        </p>
        <p className="pb-4 pl-10 text-lg">
          {t("about.praiseLead")}{" "}
          <span className="text-lg text-themePrimaryColor">
            {t("about.praiseAccent")}
          </span>{" "}
          {t("about.praiseTail")}
        </p>
        <span className="pl-8 html-tag">{"</p>"}</span>
        <br />
        <span className="pl-4 html-tag">{"</body>"}</span>
        <br />
        <span className="html-tag">{"</html>"}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && (
        <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>
      )}
    </div>
  );
};

export default About;

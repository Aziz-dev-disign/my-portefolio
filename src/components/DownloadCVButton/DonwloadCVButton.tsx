import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { mediaBreakpoints } from "../../common/responsive";

const CV_FR = import.meta.env.VITE_CV_PATH_FR || "/cv.pdf";
const CV_EN = import.meta.env.VITE_CV_PATH_EN || "/cv-en.pdf";

export const DownloadCVButton = ({ isSmall }: { isSmall?: boolean }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "fr").split("-")[0];
  const cvPath = lang === "en" ? CV_EN : CV_FR;
  const fileName =
    lang === "en"
      ? "AbdoulAzizBANDE-EN.pdf"
      : "AbdoulAzizBANDE-FR.pdf";

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  const className = `${
    !isSmall
      ? "mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit"
      : ""
  } btn`;

  return mobile ? (
    <a title={t("common.downloadCV")} className={className} href={cvPath} download={fileName}>
      {t("common.downloadCV")}
    </a>
  ) : (
    <a
      title={t("common.downloadCV")}
      href={cvPath}
      download={fileName}
      className={className}
    >
      {t("common.downloadCV")}
    </a>
  );
};

import { useMediaQuery } from "react-responsive";
import { mediaBreakpoints } from "../../common/responsive";
// import { useDownloadPdf } from "../../hooks";

export const DownloadCVButton = ({ isSmall }: { isSmall?: boolean }) => {
  const CV_PATH =
    "https://drive.google.com/uc?export=download&id=11wpWdaPAk1JG7hr7vbY1nUJitloDDUAi";
  // const [, handleDownload] = useDownloadPdf(CV_PATH, "AbdoulAzizBande-dev.pdf");

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      title="download cv"
      className={`${!isSmall ? "mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit" : ""} btn`}
      href={CV_PATH}
      download
    >
      Télécharger mon CV
    </a>
  ) : (
    <a
      title="download cv"
      href={CV_PATH}
      download="AbdoulAzizBande-dev.pdf"
      className={`${!isSmall ? "mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit" : ""} btn`}
    >
      Télécharger mon CV
    </a>
  );
};

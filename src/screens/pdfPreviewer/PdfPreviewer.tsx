import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  RenderEnterFullScreenProps,
  fullScreenPlugin,
} from "@react-pdf-viewer/full-screen";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";

import { IoMdDownload } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";
import { mediaBreakpoints } from "../../common";

const CV_FR = import.meta.env.VITE_CV_PATH_FR || "/cv.pdf";
const CV_EN = import.meta.env.VITE_CV_PATH_EN || "/cv-en.pdf";

const cvUrlFor = (lang: string) =>
  lang.split("-")[0] === "en" ? CV_EN : CV_FR;

const cvFileNameFor = (lang: string) =>
  lang.split("-")[0] === "en"
    ? "AbdoulAzizBANDE-EN.pdf"
    : "AbdoulAzizBANDE-FR.pdf";

export const PdfPriever = () => {
  const { i18n } = useTranslation();
  const fullScreenPluginInstance = fullScreenPlugin();

  const { EnterFullScreen } = fullScreenPluginInstance;

  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  const lang = i18n.resolvedLanguage || i18n.language || "fr";
  const cvUrl = cvUrlFor(lang);
  const [, handleDownload] = useDownloadPdf(cvUrl, cvFileNameFor(lang));
  return (
    <Worker
      key={lang}
      workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
    >
      <div className="h-full p-2 overflow-hidden">
        <div className="flex flex-row items-start justify-center">
          <EnterFullScreen>
            {(props: RenderEnterFullScreenProps) => (
              <>
                {mobile ? (
                  <button
                    onClick={handleDownload}
                    title="download"
                    className="h-8 mb-2 mr-2 btn"
                  >
                    <IoMdDownload />{" "}
                  </button>
                ) : (
                  <button
                    title="fullscreen"
                    className="h-8 mb-2 mr-2 btn"
                    onClick={props.onClick}
                  >
                    <BsArrowsFullscreen />
                  </button>
                )}
              </>
            )}
          </EnterFullScreen>

          <div className="flex flex-row h-8 pb-2">
            <ZoomOut>
              {(props: RenderZoomOutProps) => (
                <button
                  title="zoom out"
                  className="h-8 btn"
                  onClick={props.onClick}
                >
                  <LuZoomOut />
                </button>
              )}
            </ZoomOut>

            <div className="h-8 px-2 pt-1 text-textEditorColor">
              <CurrentScale>
                {(props: RenderCurrentScaleProps) => (
                  <>{`${Math.round(props.scale * 100)}%`}</>
                )}
              </CurrentScale>
            </div>
            <ZoomIn>
              {(props: RenderZoomInProps) => (
                <button
                  title="zoom in"
                  className="h-8 btn"
                  onClick={props.onClick}
                >
                  <LuZoomIn />
                </button>
              )}
            </ZoomIn>
          </div>
        </div>
        <Viewer
          fileUrl={cvUrl}
          plugins={[zoomPluginInstance, fullScreenPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default PdfPriever;

// import { useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// import { AppContext, AppContextInterface } from "../../providers/application";
// import { DownloadCVButton } from "../../components/DownloadCVButton";
import me from "../../assets/images/me.jpg";

export const Home = () => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const { setPdfPreviewerOpen } = useContext(AppContext) as AppContextInterface;

  // const handleShowCV = () => {
  //   setPdfPreviewerOpen(true);
  //   navigate("/cv", { state: { historyPath: pathname } });
  // };

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex flex-col items-center w-full py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{"<"}</span>Hello 👋 mon nom est
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Abdoul Aziz BANDE{" "}
            <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">
              {"/>"}
            </span>{" "}
          </h1>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Typescript Developer",
              1000,
              "Flutter Developer",
              1000,
              "React Developer",
              1000,
              "NodeJS Developer",
              1000,
            ]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: "8px",
              fontWeight: "300",
              fontSize: "1.5rem",
              color: "#768390",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          {/* <div className="flex flex-col w-full mt-10 sm:flex-row">
            <DownloadCVButton />
            <button
              title="open cv"
              className="w-full px-12 py-4 rounded btn-secondary hover:brightness-110 sm:w-fit"
              onClick={handleShowCV}
            >
              Voir le CV
            </button>
          </div> */}
        </div>
      </div>
      <div className="relative flex justify-center xl:relative xl:top-[-64px] xl:w-1/2 xl:pt-10">
        <img
          className="h-auto w-auto max-w-xs aspect-[4/3] rounded-lg object-cover shadow-lg md:h-[400px] md:w-[286px] xl:h-[500px] xl:w-[358px]"
          loading="lazy"
          src={me}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Home;

import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import me from "../../assets/images/me.jpg";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const roles = t("home.roles", { returnObjects: true }) as string[];
  const sequence = roles.flatMap((role) => [role, 1000]);

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex flex-col items-center w-full py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{"<"}</span>
            {t("home.greeting")}
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Abdoul Aziz BANDE{" "}
            <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">
              {"/>"}
            </span>{" "}
          </h1>
          <TypeAnimation
            key={i18n.language}
            sequence={sequence}
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
        </div>
      </div>
      <div className="relative flex justify-center xl:relative xl:top-[-64px] xl:w-1/2 xl:pt-10">
        <img
          className="h-auto w-auto max-w-xs aspect-[4/3] rounded-lg object-cover shadow-lg md:h-[400px] md:w-[286px] xl:h-[500px] xl:w-[358px]"
          loading="lazy"
          src={me}
          alt="Abdoul Aziz BANDE"
        />
      </div>
    </div>
  );
};

export default Home;

import {useMediaQuery} from 'react-responsive';
import { mediaBreakpoints } from '../../common';

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex items-center w-full h-auto overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="">{'<html>'}</span>
        <br />
        <span className="pl-4 ">{'<body>'}</span>
        <br />
        <span className="pl-8 ">{'<h1>'}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

        <span className="pl-8 ">{'</h1>'}</span>
        <br />
        <span className="pl-8 ">{'<p>'}</span>
        <p className="pb-4 pl-10 text-lg">
          je m'appelle <span className="text-lg text-themePrimaryColor">Abdoul Aziz BANDE</span> et je suis
          un <span className="text-lg text-themePrimaryColor">Développeur mobile et web fullstack </span>
          avec 5 années d'expérience dans le développement d'applications basées sur les technologies{' '}
          <span className="text-lg text-themePrimaryColor">Typescript, React, Node.js et Flutter</span>.
        </p>
        <p className="pb-4 pl-10 text-lg">
          On apprécie particulièrement chez moi{' '}
          <span className="text-lg text-themePrimaryColor">
            mon sens aigu du détail, ma capacité à résoudre des problèmes complexes, ainsi que mon engagement à toujours
            livrer des résultats de haute qualité.
          </span>{' '}
          Je suis passionné par l'utilisation des technologies pour relever des défis complexes et je suis un fervent
          défenseur des méthodologies Agile et des meilleures pratiques en matière de développement.
        </p>
        <span className="pl-8 ">{'</p>'}</span>
        <br />
        <span className="pl-4 ">{'</body>'}</span>
        <br />
        <span className="pl-2 ">{'</html>'}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
    </div>
  );
};

export default About;

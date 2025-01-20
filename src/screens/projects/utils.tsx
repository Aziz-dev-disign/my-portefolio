import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  SiDirectus,
  SiFirebase,
  SiFlutter,
  SiPhp,
  SiWordpress,
} from "react-icons/si";

import { SiNestjs, SiPrisma, SiTypescript } from "react-icons/si";
import sankLogo from "../../assets/images/sank.png";
import yengaLogo from "../../assets/images/yenga.png";
import ikoddiLogo from "../../assets/images/ikoddi.png";
import yalendarLogo from "../../assets/images/yalendar.png";
import gendarmerieLogo from "../../assets/images/gendarmerie.jpg";
import jdwsLogo from "../../assets/images/jdws.jpeg";
import einLogo from "../../assets/images/ein.jpg";


export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  {
    name: "Sank Money",
    description: `Sank Money est une application de mobile money qui facilite les transactions financières à travers les téléphones mobiles. 
    Elle permet aux utilisateurs de transférer de l'argent vers d'autres personnes, qu'il s'agisse de proches ou de partenaires commerciaux. 
    L'application offre également des services de paiement pour des achats en ligne ou en magasin, ainsi que la possibilité de recharger son crédit téléphonique et d'acheter des forfaits internet. 
    En plus de cela, Sank Money permet de payer des factures, offrant ainsi une solution pratique pour gérer ses finances quotidiennes.`,
    img: sankLogo,
    url: "https://sankmoney.com/",
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <SiFlutter key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaReact key="native" color="#5ED4F4" className="text-[28px]" />,
      <SiFirebase key="firebase" color="#FFA500" className="text-[28px]" />,
    ],
  },
  {
    name: "Yenga",
    description: `Yenga est une application mobile innovante qui facilite la gestion de vos finances quotidiennes, notamment en permettant l'achat de crédits de communication et de forfaits internet sans nécessiter de déplacements..
    `,
    img: yengaLogo,
    url: "https://yenga.app/",
    stack: [
      <SiFlutter key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiFirebase key="firebase" color="#FFA500" className="text-[28px]" />,
    ],
  },
  {
    name: "Ikoddi",
    description: `Ikoddi vous permet d'envoyer des Messages(messages promotionnels, campagne de sensibilisation, notifications...), du Crédit de communication, des Forfaits internet a des groupes de personnes.`,
    img: ikoddiLogo,
    url: "https://ikoddi.com/",
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiPrisma key="prisma" color="#5ED4F4" className="text-[28px]" />,
      <SiNestjs key="nest" color="#DA224C" className="text-[28px]" />,
      <BiLogoPostgresql
        key="postgres"
        color="#3A6596"
        className="text-[28px]"
      />,
    ],
  },
  {
    name: "Yalendar",
    description: `Yalendar est un SAAS qui permet de gérer les rendez-vous, les événements, les tâches et les notes. Il est conçu pour les professionnels et les particuliers qui souhaitent organiser leur emploi du temps de manière efficace et intuitive. Yalendar offre une interface conviviale et des fonctionnalités avancées pour une gestion optimale de votre temps.`,
    img: yalendarLogo,
    url: "https://yalendar.com/kreezus/demo-yalendar",
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiPrisma key="prisma" color="#5ED4F4" className="text-[28px]" />,
      <SiNestjs key="nest" color="#DA224C" className="text-[28px]" />,
      <BiLogoPostgresql
        key="postgres"
        color="#3A6596"
        className="text-[28px]"
      />,
    ],
  },
  {
    name: "Ma Gendarmerie BF",
    description: `Oui, Ma Gendarmerie BF est une application mobile officielle de la Gendarmerie nationale du Burkina Faso. Elle permet aux citoyens de signaler des incidents, de faire des dénonciations, et de trouver des informations utiles comme les contacts des services de la gendarmerie. C’est une initiative visant à renforcer la sécurité et la communication entre les forces de sécurité et la population burkinabè.`,
    img: gendarmerieLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <SiFlutter key="flutter" color="#5ED4F4" className="text-[28px]" />,
      <SiDirectus key="directus" color="#00A9E0" className="text-[28px]" />,
      <BiLogoPostgresql
        key="postgres"
        color="#3A6596"
        className="text-[28px]"
      />,
    ],
    url: "https://google.com",
  },
];

export const customProjects: Project[] = [
  {
    name: "JDWS",
    description: `Justice et Dignité pour les Femmes du Sahel (JDWS) est une organisation internationale non gouvernementale. Son objectif principal est de lutter contre les violences basées sur le genre (VBG) et de promouvoir les droits des femmes. JDWS contribue à briser le silence et à lever les tabous pour mieux informer sur les violences basées sur le genre, assister les femmes et les filles du Sahel, et dénoncer haut et fort les inégalités et la justice sociale.`,
    img: jdwsLogo,
    stack: [
      <SiPhp key="php" color="#777BB4" className="text-[28px]" />,
      <SiWordpress key="wordpress" color="#5ED4F4" className="text-[28px]" />,
    ],
    url: "https://jdws.org/",
  },
  {
    name: "EIN",
    description: `L'École internationale d'éducation numérique est une institution pionnière dédiée à l'excellence dans l'éducation numérique. A l'heure où la technologie numérique joue un rôle de plus en plus important dans le développement économique et social, notre centre se positionne comme un carrefour d'apprentissage, d'innovation et d'opportunités pour le peuple burkinabé.`,
    img: einLogo,
    stack: [
      <SiPhp key="php" color="#777BB4" className="text-[28px]" />,
      <SiWordpress key="wordpress" color="#5ED4F4" className="text-[28px]" />,
    ],
    url: "https://ein-bf.com/",
  },
];

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
  descriptionKey: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
  previewBtn?: boolean;
}

export const professionnalProjects: Project[] = [
  {
    name: "Sank Money",
    descriptionKey: "sankMoney",
    img: sankLogo,
    url: "https://sankmoney.com/",
    previewBtn: true,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <SiFlutter key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaReact key="native" color="#5ED4F4" className="text-[28px]" />,
      <SiFirebase key="firebase" color="#FFA500" className="text-[28px]" />,
    ],
  },
  {
    name: "Yenga",
    descriptionKey: "yenga",
    img: yengaLogo,
    url: "https://yenga.app/",
    stack: [
      <SiFlutter key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiFirebase key="firebase" color="#FFA500" className="text-[28px]" />,
    ],
  },
  {
    name: "Ikoddi",
    descriptionKey: "ikoddi",
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
    descriptionKey: "yalendar",
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
    descriptionKey: "gendarmerie",
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
  },
];

export const customProjects: Project[] = [
  {
    name: "JDWS",
    descriptionKey: "jdws",
    img: jdwsLogo,
    stack: [
      <SiPhp key="php" color="#777BB4" className="text-[28px]" />,
      <SiWordpress key="wordpress" color="#5ED4F4" className="text-[28px]" />,
    ],
    url: "https://jdws.org/",
  },
  {
    name: "EIN",
    descriptionKey: "ein",
    img: einLogo,
    stack: [
      <SiPhp key="php" color="#777BB4" className="text-[28px]" />,
      <SiWordpress key="wordpress" color="#5ED4F4" className="text-[28px]" />,
    ],
    url: "https://ein-bf.com/",
  },
];

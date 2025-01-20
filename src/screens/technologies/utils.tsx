import {BiLogoPostgresql} from 'react-icons/bi';
import {FaCss3, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import {
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiJavascript,
  SiNestjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'JavaScript',
        icon: <SiJavascript color="#F0DB4F" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'Dart',
        icon: <SiDart color="#02569B" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'Flutter',
        icon: <SiFlutter color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 5,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 5,
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'Nest',
        icon: <SiNestjs color="#DA224C" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },

      {
        label: 'Firebase',
        icon: <SiFirebase color="#FFA500" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Postgresql',
        icon: <BiLogoPostgresql color="#3A6596" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'Prisma',
        icon: <SiPrisma color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
    ],
  },
  {
    name: 'CI/CD',
    items: [
      {
        label: 'Docker',
        icon: <SiDocker color="#2496ED" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Gitlab',
        icon: <SiGitlab color="#FC6D26" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'Github',
        icon: <SiGithub color="#181717" className="text-[48px] sm:text-[64px]" />,
        expirience: 5,
      },
      {
        label: 'GCP',
        icon: <SiGooglecloud color="#4285F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
     
    ],
  },
  
];

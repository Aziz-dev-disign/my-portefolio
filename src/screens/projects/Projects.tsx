import {useState} from 'react';
import ProjectCard from './ProjectCard';
import {comerciaProjects, customProjects} from './utils';
import { DonwloadCVButton } from '../../components/DownloadCVButton';


export const Projects = () => {
  const data = [
    {
      label: 'Professionnel',
      value: 'comercial',
    },
    {
      label: 'Personnel',
      value: 'personal',
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full sm:px-1">
        <div className="flex flex-row items-center pt-4 pb-6 align-middle">
          <span className="html-tag">{'<b>'} </span>
          <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
            Mes <span className="text-xl text-themePrimaryColor sm:text-2xl">Projets</span>
          </p>
          <span className="html-tag">{'</b>'}</span>
        </div>
      </div>
      <div className="mb-8">
        <button
          title="Comercial projects"
          onClick={() => setActiveTab('comercial')}
          className={activeTab === 'comercial' ? `btn-active` : 'btn'}
        >
          Professionnel
        </button>
        <button
          title="Personal projects"
          onClick={() => setActiveTab('personal')}
          className={activeTab === 'personal' ? `btn-active` : 'btn'}
        >
          Personnel
        </button>
      </div>
      <>
        {activeTab === 'comercial' ? (
          <div className="grid grid-cols-1 gap-6 xxl:grid-cols-3 md:grid-cols-2">
            {comerciaProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 xxl:grid-cols-3 md:grid-cols-2">
            {customProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </>
      <div className="w-full mt-12">
        <i className="pr-4 text-lg fond-light text-primaryColor">Plus d'information</i>
        <DonwloadCVButton isSmall />
      </div>
    </>
  );
};

export default Projects;

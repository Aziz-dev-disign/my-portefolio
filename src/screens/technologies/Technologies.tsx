import { DownloadCVButton } from '../../components/DownloadCVButton';
import {skillset} from './utils';

export const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:px-1">
      <div className="flex flex-row items-center pt-4 pb-6 align-middle">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
          Compétences <span className="text-xl text-themePrimaryColor sm:text-2xl">Professionnelles</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>

      <div className="w-full">
        {skillset.map((skill) => (
          <div key={skill.name} className="w-full">
            {skill.name && (
              <div className="flex flex-row pt-12 pb-6">
                <span className="html-tag">{'<span>'} </span>
                <p className="px-2 text-lg font-bold text-primaryColor">{skill.name}</p>
                <span className="html-tag">{'</span>'}</span>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 xxl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
              {skill.items.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center justify-center w-full rounded-lg">
                  <div className="before:absolute before:inset-0 before:rounded-lg before:bg-white before:opacity-c8 before:light:bg-black"></div>
                  <div className="relative flex flex-row items-center w-full px-4 py-4 sm:p-8 sm:py-6">
                    <div className="w-12 h-12 sm:h-16 sm:w-16">{item.icon}</div>
                    <div className="pl-4 text-primaryColor">
                      <span className="text-base font-semibold h-7 xl:text-2xl xl:font-bold">{item.label}</span>
                      {item?.expirience && (
                        <div className="flex flex-row pt-1 text-sm font-light sm:flex-col sm:pt-2 xl:text-base">
                          <span className="mr-2 sm:mr-1">Expirience:</span>
                          <span>{item?.expirience} années</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-12">
        <i className="pr-4 text-lg fond-light text-primaryColor">More information</i>
        <DownloadCVButton isSmall />
      </div>
    </div>
  );
};

export default Technologies;

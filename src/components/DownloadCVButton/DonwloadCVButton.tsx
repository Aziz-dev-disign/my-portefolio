import {useMediaQuery} from 'react-responsive';
import { mediaBreakpoints } from '../../common/responsive';
import { useDownloadPdf } from '../../hooks';

export const DonwloadCVButton = ({isSmall}: {isSmall?: boolean}) => {
  const [, handleDownload] = useDownloadPdf(import.meta.env.VITE_CV_PATH, 'MasoudOuattaraResume.pdf');

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      title="download cv"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit' : ''}  btn`}
      href={import.meta.env.VITE_CV_PATH}
    >
      Télécharger mon CV
    </a>
  ) : (
    <button
      title="download cv"
      onClick={handleDownload}
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      Télécharger mon CV
    </button>
  );
};

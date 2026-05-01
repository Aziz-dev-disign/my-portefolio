import {useContext} from 'react';
import {MdClose} from 'react-icons/md';
import {useTranslation} from 'react-i18next';
import { Theme, ThemeContext, ThemeContextInterface } from '../../providers/theme';

export const ThemeDialog = ({setThemeDialogOpen}: {setThemeDialogOpen: (open: boolean) => void}) => {
  const {t} = useTranslation();
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextInterface;

  const handleSelectTheme = (selectedTheme: Theme) => () => {
    toggleTheme(selectedTheme);
    setThemeDialogOpen(false);
  };

  return (
    <div className="border-1 absolute bottom-14 right-2 h-auto w-[95%] rounded-lg border-themePrimaryColor bg-bgColor shadow-technologiesCard sm:bottom-8 sm:w-[480px]">
      <div className="flex flex-row justify-between px-4 pt-2">
        <p className="text-md font-nunito text-primaryColor">{t('themeDialog.title')}</p>
        <MdClose className="text-primaryColor hover:cursor-pointer" onClick={() => setThemeDialogOpen(false)} />
      </div>
      <div className="flex flex-row justify-center">
        {Object.values(Theme).map((item, key) => {
          const selected = theme === item;
          return (
            <div key={key} className="px-4 py-2 text-center text-lg text-primaryColor">
              <button
                title="theme"
                onClick={handleSelectTheme(item)}
                disabled={selected}
                className={`btn disabled:cursor-not-allowed ${selected ? 'bg-themePrimaryColor' : ''}`}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeDialog;

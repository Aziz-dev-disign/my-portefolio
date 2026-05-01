import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, SupportedLang } from "../../i18n";

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "fr").split(
    "-"
  )[0] as SupportedLang;

  return (
    <div
      className="flex items-center gap-1 text-[0.75rem]"
      role="group"
      aria-label={t("language.label")}
    >
      {SUPPORTED_LANGS.map((lng) => {
        const active = lng === current;
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={`rounded px-1.5 py-0.5 font-bold uppercase transition-colors ${
              active
                ? "bg-themePrimaryColor text-tabBarActiveTextColor"
                : "text-primaryColor/70 hover:text-primaryColor"
            }`}
          >
            {t(`language.${lng}`)}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;

import { languageTag } from "../paraglide/runtime";

const altText = {
  es: "Change language to english",
  en: "Cambiar el idioma a español",
};

const LanguageToggle = () => {
  const language = languageTag();

  return (
    <a
      href={language === "es" ? "/en" : "/"}
      className="size-7 h-fit cursor-pointer transition-transform hover:scale-105"
    >
      <img src={`/flags/${language}.svg`} alt={altText[language]} />
    </a>
  );
};

export default LanguageToggle;

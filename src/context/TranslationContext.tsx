import React, { createContext, useContext, useState, useEffect } from "react";

export type TranslationLanguage =
  | "english"
  | "bengali"
  | "urdu"
  | "turkish"
  | "uzbek";

interface TranslationContextType {
  language: TranslationLanguage;
  setLanguage: (lang: TranslationLanguage) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

const LANGUAGE_KEY = "quran_pro_selected_language";

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<TranslationLanguage>(() => {
    return (
      (localStorage.getItem(LANGUAGE_KEY) as TranslationLanguage) || "english"
    );
  });

  const setLanguage = (lang: TranslationLanguage) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

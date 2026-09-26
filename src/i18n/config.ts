import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en/en.json'
import es from './es/es.json'
import commonEs from './es/common-es.json'
import commonEn from './en/common-en.json'
import experienceEn from './en/experience-en.json'
import experienceEs from './es/experience-es.json'
/* import projectsEs from './es/projects-es.json'
import projectsEn from './en/projects-en.json' */

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
        common: commonEn,
        experience: experienceEn,
       /*  projects: projectsEn */
      },
      es: {
        translation: es,
        common: commonEs,
        experience: experienceEs,
      /*   projects: projectsEs */
      }
    }
  })
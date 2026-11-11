import { useTranslation, Trans } from "react-i18next";
import  Section  from "../ui/Section";
import SocialLink from '../SocialLink/SocialLink'
import cvEn from '/cv/AylenGil_CV_EN.pdf'
import cvEs from '/cv/AylenGil_CV_ES.pdf'


const Hero = () => {

  const { t, i18n } = useTranslation(['translation', 'common'])
  const language:string = i18n.resolvedLanguage || 'en'

  return (
    <Section id='home' className="bg-background mt-15 flex flex-col align-center justify-center items-center h-screen overflow-hidden">
        <div className="hero-pattern absolute inset-0 pointer-events-none"></div>
      
      <div className='z-10 text-center flex flex-col gap-4 py-5 max-w-xl md:ml-5'>
        <Trans
        parent='h1'
        components={{span: <span className="text-action italic font-onest"></span>}}
         className="text-text-primary text-6xl max-lg:text-4xl font-jakarta font-bold">{t('hero.title')}</Trans>
        <h2 className="text-text-primary text-2xl">{t('hero.role')}</h2>
        <span className="text-text-secondary text-base max-lg:text-base">{t('hero.focus')}</span>
      </div>
      <div className='z-10 flex flex-row justify-center align-center gap-3.5 py-5'>
        <SocialLink socialType='github'/>
        <SocialLink socialType='linkedin'/>
        <a 
        className="bg-link text-background rounded-md px-3 flex items-center text-sm font-semibold font-jakarta hover:animate-pulse512 transition-all active:scale-95 active:shadow-[0_0_0_4px_greenyellow]"
        href={language === 'en' ? cvEn : cvEs} 
        download aria-label={t('downloadCvAria', {ns:'common'})}
        >
          {t('downloadCv', {ns:'common'})}
        </a>
      </div>
    </Section>
  )
}

export default Hero
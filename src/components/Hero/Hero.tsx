import { useTranslation } from "react-i18next";
import SocialLink from '../SocialLink/SocialLink'
import cvEn from '/cv/AylenGil_CV_EN.pdf'
import cvEs from '/cv/AylenGil_CV_ES.pdf'


const Hero = () => {

  const { t, i18n } = useTranslation(['translation', 'common'])
  const language:string = i18n.resolvedLanguage || 'en'

  return (
    <section id='home' className="bg-background mt-15 p-15 flex flex-col align-center justify-center">
      <div className='text-center flex flex-col gap-4 py-5'>
        <h1 className="text-action text-6xl max-lg:text-4xl">{t('hero.title', {ns:'translation'})}</h1>
        <h2 className="text-text-primary text-2xl max-lg:text-2xl">{t('hero.role',{ns:'translation'})}</h2>
        <span className="text-text-secondary text-base max-lg:text-base">{t('hero.focus',{ns:'translation'})}</span>
      </div>
      <div className='flex flex-row justify-center align-center gap-3 py-5'>
        <SocialLink socialType='github'/>
        <SocialLink socialType='linkedin'/>
        <a 
        className="bg-link text-background rounded-md px-3 flex items-center text-sm"
        href={language === 'en' ? cvEn : cvEs} 
        download aria-label={t('downloadCvAria', {ns:'common'})}
        >
          {t('downloadCv', {ns:'common'})}
        </a>
      </div>
    </section>
  )
}

export default Hero
import { useTranslation } from "react-i18next";
import githubIcon from '@/assets/icons/github.png'
import linkedinIcon from '@/assets/icons/linkedin.png'
import cvEn from '/cv/AylenGil_CV_EN.pdf'
import cvEs from '/cv/AylenGil_CV_ES.pdf'


const Hero = () => {

  const { t, i18n } = useTranslation(['translation', 'common'])
  const language:string = i18n.resolvedLanguage || 'en'

  return (
    <section id='hero'>
      <div className='title-container'>
        <h1>{t('hero.title', {ns:'translation'})}</h1>
        <h2>{t('hero.role',{ns:'translation'})}</h2>
        <span>{t('hero.focus',{ns:'translation'})}</span>
      </div>
      <div className='actions-container'>
        <button aria-label={t('linkedin', {ns:'common'})}><img src={githubIcon} alt="" /></button>
        <button aria-label={t('github', {ns:'common'})}><img src={linkedinIcon} alt="" /></button>
        <a href={language === 'en' ? cvEn : cvEs} download aria-label={t('downloadCvAria', {ns:'common'})}>{t('downloadCv', {ns:'common'})}</a>
      </div>
    </section>
  )
}

export default Hero
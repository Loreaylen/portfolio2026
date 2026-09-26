import { useTranslation } from "react-i18next";
import githubIcon from '@/assets/icons/github.png'
import linkedinIcon from '@/assets/icons/linkedin.png'


const Hero = () => {

  const { t, i18n } = useTranslation(['translation', 'common'])
  const language:string = i18n.resolvedLanguage || 'en'

  let path:string = ''
  if(language === 'en'){
    path= "/cv/AylenGil_CV_EN.pdf"
  } else path= "/cv/AylenGil_CV_ES.pdf"

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
        <a href={path} download aria-label={t('downloadCvAria', {ns:'common'})}>{t('downloadCv', {ns:'common'})}</a>
      </div>
    </section>
  )
}

export default Hero
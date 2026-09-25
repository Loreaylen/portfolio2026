import { useTranslation } from "react-i18next";
import githubIcon from '@/assets/icons/github.png'
import linkedinIcon from '@/assets/icons/linkedin.png'


const Hero = () => {

  const { t, i18n } = useTranslation()
  const language:string = i18n.resolvedLanguage || 'en'

  let path:string = ''
  if(language === 'en'){
    path= "/cv/AylenGil_CV_EN.pdf"
  } else path= "/cv/AylenGil_CV_ES.pdf"

  return (
    <section id='hero'>
      <div className='title-container'>
        <h1>{t('hero.title')}</h1>
        <h2>{t('hero.role')}</h2>
        <span>{t('hero.focus')}</span>
      </div>
      <div className='actions-container'>
        <button aria-label={t('common.linkedin')}><img src={githubIcon} alt="" /></button>
        <button aria-label={t('common.github')}><img src={linkedinIcon} alt="" /></button>
        <a href={path} download aria-label={t('common.downloadCvAria')}>{t('common.downloadCv')}</a>
      </div>
     {/*  <div className="avatar-container">
        <img src="" alt="avatar" />
      </div> */}
    </section>
  )
}

export default Hero
import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation()


  return (
    <section id='hero'>
      <div className='title-container'>
        <h1>{t('hero.title')}</h1>
        <h2>{t('hero.role')}</h2>
        <span>{t('hero.focus')}</span>
      </div>
      <div className='actions-container'>
        <button aria-label={t('common.linkedin')}></button>
        <button aria-label={t('common.github')}></button>
        <a href='#' aria-label={t('common.downloadCvAria')}>{t('common.downloadCv')}</a>
      </div>
      <div className="avatar-container">
        <img src="" alt="avatar" />
      </div>
    </section>
  )
}

export default Hero
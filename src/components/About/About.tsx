import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation()

  const paragraphs = t('about.paragraphs', { returnObjects: true }) as Array<string>

  return (
    <section id='about'>
      <div><img src="" alt={t('common.aboutImageAlt')} /></div>
      <div>
        {
          paragraphs.map((text: string) => <p>{text}</p>)
        }
      </div>
    </section>
  )
}

export default About;
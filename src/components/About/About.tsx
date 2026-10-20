import { useTranslation } from "react-i18next";
import avatar from '@/assets/img/avatar_v2.webp'

const About = () => {
  const { t } = useTranslation(['translation', 'common'])

  const paragraphs = t('about.paragraphs', { ns:'translation', returnObjects: true }) as Array<string>

  return (
    <section id='about'>
      <div><img src={avatar} alt={t('aboutImageAlt', {ns: 'common'})} /></div>
      <div>
        {
          paragraphs.map((text: string, i:number) => <p key={i}>{text}</p>)
        }
      </div>
    </section>
  )
}

export default About;
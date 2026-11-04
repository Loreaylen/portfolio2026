import { useTranslation } from "react-i18next";
import avatar from '@/assets/img/avatar_v2.webp'

const About = () => {
  const { t } = useTranslation(['translation', 'common'])

  const paragraphs = t('about.paragraphs', { ns:'translation', returnObjects: true }) as Array<string>

  return (
    <section id='about' className="p-5 bg-cards">
      <h2 className="text-text-primary text-3xl max-lg:text-2xl">{t('about.title')}</h2>
      <div className="flex flex-row gap-2 items-center  max-lg:flex-col">
      <div className="p-5"><img className="rounded-full" src={avatar} alt={t('aboutImageAlt', {ns: 'common'})} /></div>
      <article className="text-text-primary p-5 flex flex-col gap-5 text-lg max-lg:text-sm">
        {
          paragraphs.map((text: string, i:number) => <p key={i}>{text}</p>)
        }
      </article>
      </div>
    </section>
  )
}

export default About;
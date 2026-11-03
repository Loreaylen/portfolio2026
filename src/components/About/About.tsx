import { useTranslation } from "react-i18next";
import avatar from '@/assets/img/avatar_v2.webp'

const About = () => {
  const { t } = useTranslation(['translation', 'common'])

  const paragraphs = t('about.paragraphs', { ns:'translation', returnObjects: true }) as Array<string>

  return (
    <section id='about' className="p-5 flex flex-row gap-2 items-center bg-cards max-lg:flex-col">
      <div className="p-5"><img className="rounded-full" src={avatar} alt={t('aboutImageAlt', {ns: 'common'})} /></div>
      <div className="text-text-primary p-5 flex flex-col gap-5 text-lg max-lg:text-sm">
        {
          paragraphs.map((text: string, i:number) => <p key={i}>{text}</p>)
        }
      </div>
    </section>
  )
}

export default About;
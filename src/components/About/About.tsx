import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import avatar from '@/assets/img/avatar_v2.webp'

const About = () => {
  const { t } = useTranslation(['translation', 'common'])

  const paragraphs = t('about.paragraphs', { ns: 'translation', returnObjects: true }) as Array<string>

  return (
    <Section id='about' className="">
      <Heading>{t('about.title')}</Heading>
      <div className="flex flex-row gap-2 items-center  max-lg:flex-col overflow-hidden">
        <div className="p-5 rounded-full relative avatar-frame before:animate-custom-spin after:animate-custom-spin-reverse">
          <img className="rounded-full max-sm:w-full max-w-xs" src={avatar} alt={t('aboutImageAlt', { ns: 'common' })} />
        </div>
        <article className="text-text-primary p-5 flex flex-col gap-5 text-lg max-lg:text-sm">
          {
            paragraphs.map((text: string, i: number) => <p key={i}>{text}</p>)
          }
        </article>
      </div>
    </Section>
  )
}

export default About;
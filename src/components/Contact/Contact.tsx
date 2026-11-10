import { useTranslation } from "react-i18next"; 
import { Section } from "../ui/Section";
import SocialLink from "../SocialLink/SocialLink";

const Contact = () => {

  const { t } = useTranslation('translation', {keyPrefix: 'contact'})
  return (
    <Section id="contact" className="bg-background">
      <h2 className="text-text-primary text-3xl max-lg:text-2xl">{t('title')}</h2>
      <p className="text-text-primary text-center">{t('description')}</p> 
      <div className="flex flex-row gap-3 justify-center">
        <SocialLink socialType="linkedin"/>
        <SocialLink socialType="email"/>
      </div>
    </Section>
  )
}

export default Contact
import { useTranslation } from "react-i18next"; 
import SocialLink from "../SocialLink/SocialLink";

const Contact = () => {

  const { t } = useTranslation('translation', {keyPrefix: 'contact'})
  return (
    <section id="contact" className="p-5 bg-background">
      <h2 className="text-text-primary text-3xl max-lg:text-2xl">{t('title')}</h2>
      <p className="text-text-primary text-center">{t('description')}</p> 
      <div className="flex flex-row gap-3 justify-center">
        <SocialLink socialType="linkedin"/>
        <SocialLink socialType="email"/>
      </div>
    </section>
  )
}

export default Contact
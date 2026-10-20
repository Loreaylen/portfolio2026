import { useTranslation } from "react-i18next"; 
import SocialLink from "../SocialLink/SocialLink";

const Contact = () => {

  const { t } = useTranslation('translation', {keyPrefix: 'contact'})
  return (
    <section id="contact">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p> 
      <div>
        <SocialLink socialType="linkedin"/>
        <SocialLink socialType="email"/>

      </div>
    </section>
  )
}

export default Contact
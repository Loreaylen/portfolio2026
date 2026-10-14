import { useTranslation } from "react-i18next"; 

const Contact = () => {

  const { t } = useTranslation('translation', {keyPrefix: 'contact'})
  return (
    <section id="contact">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <div>
        
      </div>
    </section>
  )
}

export default Contact
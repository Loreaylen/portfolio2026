import './navbar.css'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'nav' })
  

  return (
  <nav id='menu'>
    <ul>
      <li><a href="#home">{t('home')}</a></li>
      <li><a href='#about'>{t('about')}</a></li>
      <li><a href='#workExperience'>{t('experience')}</a></li>
      <li><a href='#proyects'>{t('projects')}</a></li>
      <li><a href='#skills'>{t('skills')}</a></li>
      <li><a href='#education'>{t('education')}</a></li>
      <li><a href='#contact'>{t('contact')}</a></li>
    </ul>
    </nav>
    )
}

export default Navbar
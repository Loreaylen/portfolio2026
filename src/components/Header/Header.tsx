import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"

import sunIcon from '@/assets/icons/sol.svg'

const Header = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const currentLanguage: string | undefined = i18n.resolvedLanguage
    if (currentLanguage === undefined || currentLanguage === 'es'){
      i18n.changeLanguage('en')
    }
    else i18n.changeLanguage('es')
  }

  return (
    <header id='header'>
      <span><img src={sunIcon} alt="Menu" /></span>
      <button onClick={() => { toggleLanguage() }}>{i18n.resolvedLanguage?.toUpperCase()}</button>
      <Navbar />
    </header>
  )
}

export default Header
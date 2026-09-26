import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"
import { useState } from "react"

import sunIcon from '@/assets/icons/sol.svg'
import moonIcon from '@/assets/icons/moon.svg'
import burguerMenu from '@/assets/icons/burgerMenu.svg'

const Header = () => {
  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    const currentLanguage: string | undefined = i18n.resolvedLanguage
    if (currentLanguage === undefined || currentLanguage === 'es'){
      i18n.changeLanguage('en')
    }
    else i18n.changeLanguage('es')
  }

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <header id='header'>
      <button aria-label={isOpen ? t('menuClose') : t('menuOpen')} onClick={() => { toggleMenu() }} ><img src={burguerMenu} alt="" /></button>
      <button onClick={() => { toggleLanguage() }}>{i18n.resolvedLanguage?.toUpperCase()}</button>
      <Navbar />
      <div>
        <button aria-label={t('themeLight')}><img src={sunIcon} alt="" /></button>
        <button aria-label={t('themeDark')}><img src={moonIcon} alt="" /></button>
      </div>
    </header>
  )
}

export default Header
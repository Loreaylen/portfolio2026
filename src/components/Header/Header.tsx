import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"
import { useState } from "react"

import sunIcon from '@/assets/icons/sol.svg'
import moonIcon from '@/assets/icons/moon.svg'
import burguerMenu from '@/assets/icons/burgerMenu.svg'

const Header = () => {
  const { i18n, t } = useTranslation('translation', { keyPrefix: 'common' })
  const [isOpen, useIsOpen] = useState(false)

  const toggleLanguage = () => {
    const currentLanguage: string | undefined = i18n.resolvedLanguage
    if (currentLanguage === undefined || currentLanguage === 'es'){
      i18n.changeLanguage('en')
    }
    else i18n.changeLanguage('es')
  }

  const toggleMenu = () => {
    useIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <header id='header'>
      <button aria-label={isOpen ? t('menuClose') : t('menuOpen')} onClick={() => { toggleMenu() }} ><img src={burguerMenu} alt="Menu" /></button>
      <button onClick={() => { toggleLanguage() }}>{i18n.resolvedLanguage?.toUpperCase()}</button>
      <Navbar />
      <div>
        <span><img src={sunIcon} alt={t('themeLight')} /></span>
        <span><img src={moonIcon} alt={t('themeDark')} /></span>
      </div>
    </header>
  )
}

export default Header
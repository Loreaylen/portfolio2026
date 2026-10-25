import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"
import { useState, useContext } from "react"
import { ThemeContext } from '@/context/ThemeContext'
import type { Theme } from "@/types/theme"
import Logo from "../Logo/Logo"

import sunIcon from '@/assets/icons/sol.svg'
import moonIcon from '@/assets/icons/moon.svg'
import burguerMenu from '@/assets/icons/burgerMenu.svg'

interface ThemeButton {
  label: string,
  icon: string
}

const Header = () => {
  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const { theme, changeTheme } = useContext(ThemeContext)

  const themeButtons: Record<Theme, ThemeButton> = {
    dark: {
      label: 'themeLight',
      icon: sunIcon
    },
    light: {
      label: 'themeDark',
      icon: moonIcon
    }

  }

  const toggleLanguage = () => {
    const currentLanguage: string | undefined = i18n.resolvedLanguage
    if (currentLanguage === undefined || currentLanguage === 'es') {
      i18n.changeLanguage('en')
    }
    else i18n.changeLanguage('es')
  }

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <header id='header' className=" border-2 border-amber-950 p-5 bg-background flex flex-row gap-1 items-center justify-between">

<div className="size-auto">
  <Logo className="size-8 text-action"/>
</div>

      <button 
      className="hidden max-lg:block"
      aria-label={isOpen ? t('menuClose') : t('menuOpen')} 
      onClick={() => { toggleMenu() }} 
      >
        <img src={burguerMenu} alt="" />
        </button>
      
      <Navbar />
      <div className="flex flex-row gap-2 size-auto">
        <button 
        onClick={() => { toggleLanguage() }}
        className="p-3 size-10 text-center  bg-pink-400"
        >
          {i18n.resolvedLanguage?.toUpperCase()}
          </button>
        <button
          aria-label={t('${themeButtons[theme].label}')}
          onClick={() => { changeTheme() }}
          className="cursor-pointer"
        >
          <img src={themeButtons[theme].icon} alt="" className="bg-accent" />
        </button>
      </div>
    </header>
  )
}

export default Header
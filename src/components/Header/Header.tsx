import Navbar from "../Navbar/Navbar"
import { useTranslation } from "react-i18next"
import { useState, useContext, type ComponentType, type SVGProps } from "react"
import { ThemeContext } from '@/context/ThemeContext'
import type { Theme } from "@/types/theme"
import matchQuery from "@/hooks/matchQuery"

import Logo from "@/assets/icons/logo.svg?react"
import sunIcon from '@/assets/icons/sol.svg?react'
import moonIcon from '@/assets/icons/moon.svg?react'
import BurguerMenu from '@/assets/icons/burgerMenu.svg?react'

interface ThemeButton {
  label: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>
}


const Header = () => {

  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = matchQuery("(width >= 1024px)")

  if (isDesktop && isOpen) {
    setIsOpen(false)
  }

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

  const ThemeIcon = themeButtons[theme].icon

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
    <header id='header' className="h-20 p-5 bg-background flex flex-row gap-2 items-center justify-between border-b border-border fixed w-screen">
      <div className="size-auto">
        <Logo className="size-12 text-action" />
      </div>

      <button
        className="hidden max-lg:block max-lg:p-2 max-lg:size-13 cursor-pointer"
        aria-label={isOpen ? t('menuClose') : t('menuOpen')}
        onClick={() => { toggleMenu() }}
      >
        <BurguerMenu className="size-9 text-action" />
      </button>

      <aside className={`${isOpen ? 'max-lg:fixed' : 'max-lg:hidden'} grow flex bg-background flex-row items-center justify-between gap-10 max-lg:h-[calc(100dvh-5rem)] max-lg:w-50 max-lg:flex-col max-lg:bottom-0 max-lg:right-0 max-lg:border-l max-lg:border-b border-border max-lg:pb-5 max-lg:bg-cards`}>
        <Navbar />

        <div className="flex items-center gap-5">
          <button
            onClick={() => { toggleLanguage() }}
            className="p-2 size-11 text-lg rounded-lg text-cards border-border bg-action cursor-pointer"
          >
            {i18n.resolvedLanguage?.toUpperCase()}
          </button>
          <button
            aria-label={t('${themeButtons[theme].label}')}
            onClick={() => { changeTheme() }}
            className="cursor-pointer px-1 size-11 rounded-lg border-2 border-border bg-cards"
          >
            <ThemeIcon className="text-action size-8" />
          </button>
        </div>
      </aside>
    </header>
  )
}

export default Header
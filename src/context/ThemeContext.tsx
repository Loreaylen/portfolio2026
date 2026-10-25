import { createContext, useState, useEffect } from 'react'
import { setItem, getItem } from '@/utils/storage'
import type { ReactNode } from 'react'
import type { Theme } from '@/types/theme'

interface ThemeContextType {
  theme: Theme,
  changeTheme: VoidFunction
}

const getInitialTheme = () => {
  const initialTheme = getItem('theme')
  return initialTheme || 'dark' as Theme
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', changeTheme: () => { } })

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    setItem('theme', theme)
  }, [theme])

  const changeTheme = () => {
    setTheme((current) => {
      return current === 'dark' ? 'light' : 'dark'
    })
  }

  return (<ThemeContext value={{ theme, changeTheme }}>
    {children}
  </ThemeContext>)
}

export default ThemeProvider
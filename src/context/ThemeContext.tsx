import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Theme } from '@/types/theme'

interface ThemeContextType {
  theme: Theme,
  changeTheme: VoidFunction
}

export const ThemeContext = createContext<ThemeContextType>({theme: 'dark', changeTheme: () => {}})

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const changeTheme = () => {
    setTheme((current) => {
      return current === 'dark' ? 'light' : 'dark'
    })
  }

  return (<ThemeContext value={{theme, changeTheme}}>
    {children}
  </ThemeContext>)
}

export default ThemeProvider
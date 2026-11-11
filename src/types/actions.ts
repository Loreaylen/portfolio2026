import type { ComponentType, SVGProps } from "react"

export interface Action  {
  url: 'githubUrl'| 'siteUrl' |'demoUrl',
  icon: ComponentType<SVGProps<SVGSVGElement>>,
  label: string
}
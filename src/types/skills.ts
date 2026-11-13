import type { ComponentType, SVGProps } from "react"

export type Category = "frontend" | "backend" | "database" | "tools"

export interface Skill {
  name: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>,
  category: Category
}

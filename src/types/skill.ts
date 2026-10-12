export type Category = "frontend" | "backend" | "database" | "tools"

export interface Skill {
  name: string,
  icon: string,
  category: Category
}
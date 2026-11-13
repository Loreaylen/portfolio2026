import type { Skill } from "@/types/skills"

export const SkillItem = (skill : Skill  ) => {

    const Logo = skill.icon
    return <article
      className="p-3 h-auto max-w-30 rounded-lg flex flex-col items-center justify-center gap-3 inset-shadow-[0px_30px_50px_-12px_var(--color-background)] inset-shadow-border"
    >
      <Logo className="size-15 text-text-primary" />
      <span className="text-sm font-bold text-text-secondary text-center">{skill.name}</span>
    </article>
  
}
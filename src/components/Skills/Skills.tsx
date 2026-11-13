import { useTranslation } from "react-i18next"
import { useState } from "react"
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { skillsList } from '@/assets/data/skillsList'
import type { Category, Skill } from "@/types/skills"

const Skills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' })
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const categories: Category[] = ["frontend", "backend", "database", "tools"]

  const selectCategory = (category: Category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category)
    } else setSelectedCategory(null)
  }

  return (
    <Section id='skills' className="">
      <Heading>{t('title')}</Heading>
      <div className="p-3 flex flex-row gap-3 flex-wrap">
        {categories.map((category: Category) => {
          return (
            <button
              className={`border border-border bg-card rounded-lg px-3 py-0.5 text-border font-medium cursor-pointer`}
              key={category}
              aria-pressed={category === selectedCategory}
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          )
        })
        }
      </div>
      <div className="max-w-4xl grid gap-2 grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-4 
      ">
        {
          skillsList.map((skill: Skill, i: number) => {
            if (skill.category === selectedCategory || selectedCategory === null) {
              const Logo = skill.icon
              return <article 
              className="p-3 h-auto max-w-30 rounded-lg flex flex-col items-center justify-center gap-3 inset-shadow-[0px_30px_50px_-12px_var(--color-background)] inset-shadow-border"
              key={i}>
                <Logo className="size-15" />
                <span className="text-sm font-bold text-text-secondary text-center">{skill.name}</span>
              </article>
            }
          })
        }
      </div>
    </Section>
  )
}

export default Skills
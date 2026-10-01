import { useTranslation } from "react-i18next"
import { useState } from "react"
import type { Skill, Category } from "@/types/skill"
import skillsData from '@/assets/data/skills.json'

const Skills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' })
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const skillsList = skillsData.skills as Skill[]
  const categories: Category[] = ["frontend", "backend", "database", "tools"]

  const selectCategory = (category: Category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category)
    } else setSelectedCategory(null)
  }

  return (
    <section id='skills'>
      <h2>{t('title')}</h2>
      <div>
        {categories.map((category: Category) => {
          return (
            <span
              key={category}
              onClick={() => selectCategory(category)}
            >
              {category}
            </span>
          )
        })
        }
      </div>
      <div>
        {
          skillsList.map((skill: Skill, i: number) => {
            if (skill.category === selectedCategory || selectedCategory === null) {
              return <article key={i}>
                <img src="/placeholder" alt={skill.name} />
                <span>{skill.name}</span>
              </article>
            }
          })
        }
      </div>
    </section>
  )
}

export default Skills
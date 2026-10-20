import { useTranslation } from "react-i18next"
import { useState } from "react"
import skillsData from '@/assets/data/skills.json'

type Category = "frontend" | "backend" | "database" | "tools"

interface Skill {
  name: string,
  icon: string,
  category: Category
}

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
            <button
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
      <div>
        {
          skillsList.map((skill: Skill, i: number) => {
            if (skill.category === selectedCategory || selectedCategory === null) {
              return <article key={i}>
                <img src={skill.icon} alt={skill.name} />
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
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
    <section id='skills' className="bg-cards p-5">
      <h2 className="text-text-primary text-3xl max-lg:text-2xl">{t('title')}</h2>
      <div className="p-3 flex flex-row gap-3 flex-wrap">
        {categories.map((category: Category) => {
          return (
            <button
              className={`border border-border bg-card rounded-full px-3 text-border font-medium cursor-pointer`}
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
      <div className="max-w-4xl grid gap-2 grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-4 ">
        {
          skillsList.map((skill: Skill, i: number) => {
            if (skill.category === selectedCategory || selectedCategory === null) {
              return <article 
              className="p-3 rounded-md border border-border h-auto max-w-30 flex flex-col items-center justify-center gap-3"
              key={i}>
                <img className="size-15" src={skill.icon} alt={skill.name} />
                <span className="text-sm font-bold text-text-secondary text-center">{skill.name}</span>
              </article>
            }
          })
        }
      </div>
    </section>
  )
}

export default Skills
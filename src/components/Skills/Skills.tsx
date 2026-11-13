import { useTranslation } from "react-i18next"
import { useState } from "react"
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import { skillsList } from '@/assets/data/skillsList'
import type { Category, Skill } from "@/types/skills"
import { SkillItem } from "./SkillItem";

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
      <div className="max-w-4xl grid gap-2.5 grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-4 
      ">
        {
          skillsList.map((skill: Skill, i: number) => {
            if (skill.category === selectedCategory || selectedCategory === null) {
              return <SkillItem {...skill} key={i} />
            }
          })
        }
      </div>
    </Section>
  )
}

export default Skills
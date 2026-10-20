import type { EducationData } from "@/components/Education/education.types"

const EducationCard = ({title, institution, period }: EducationData) => {

  return(
    <article>
      <h4>{title}</h4>
      <span>{institution}</span>
      <span>{period}</span>
    </article>
  )
}

export default EducationCard
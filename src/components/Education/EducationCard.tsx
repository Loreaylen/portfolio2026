import type { EducationData } from "@/types/education"

const EducationCard = ({title, institution, period }: EducationData) => {

  return(
    <div>
      <h4>{title}</h4>
      <span>{institution}</span>
      <span>{period}</span>
    </div>
  )
}

export default EducationCard
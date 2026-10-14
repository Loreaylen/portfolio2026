import { useTranslation } from "react-i18next";
import EducationCard from "./EducationCard"
import type { EducationData } from "@/types/education";

const Education = () => {

  const { t } = useTranslation('education')

  const academic = t('academic', { returnObjects: true }) as Array<EducationData>
  const courses = t('courses', { returnObjects: true }) as Array<EducationData>

  return (
    <section id='education'>
      <h2>{t('title')}</h2>
      <div>
        <h3>{t('academicTitle')}</h3>
        {
          academic.map((item) => {
            return <EducationCard
              key={item.title}
              title={item.title}
              institution={item.institution}
              period={item.period}
            />
          })
        }
      </div>
      <div>
        <h3>{t('coursesTitle')}</h3>
        {
          courses.map((item) => {
            return <EducationCard
              key={item.title}
              title={item.title}
              institution={item.institution}
              period={item.period}
            />
          })
        }
      </div>
    </section>
  )
}

export default Education
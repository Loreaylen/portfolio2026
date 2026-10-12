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
      <article>
        <h3>{t('academicTitle')}</h3>
        {
          academic.map((item) => {
            return <EducationCard
              title={item.title}
              institution={item.institution}
              period={item.period}
            />
          })
        }
      </article>
      <article>
        <h3>{t('coursesTitle')}</h3>
        {
          courses.map((item) => {
            return <EducationCard
              title={item.title}
              institution={item.institution}
              period={item.period}
            />
          })
        }
      </article>
    </section>
  )
}

export default Education
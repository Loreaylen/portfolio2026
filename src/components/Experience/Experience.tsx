import { useTranslation } from "react-i18next";
import type { ExperienceData } from "@/types/experience";

const Experience = () => {
  const { t } = useTranslation('experience')

  const jobs = t('experience', { returnObjects: true }) as Array<ExperienceData>

  return (
    <section id="experience">
      {
        jobs.map((job: ExperienceData, i: number) => (
          <article key={i}>
            <h2>{job.position}</h2>
            <span>{job.company}</span>
            <span>{job.period}</span>
            <ul>
              {
                job.responsibilities.map((bullet, i) =>
                  <li key={i}>{bullet}</li>)
              }
            </ul>
          </article>
        ))
      }
    </section>
  )
}

export default Experience
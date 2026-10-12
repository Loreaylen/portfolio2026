import { useTranslation } from "react-i18next";
import type { ExperienceData } from "@/types/experience";

const Experience = () => {
  const { t } = useTranslation(['experience', 'translation'])

  const jobs = t('experience', { ns:'experience', returnObjects: true }) as Array<ExperienceData>

  return (
    <section id="experience">
      <h2>{t('experience.title', {ns:'translation'})}</h2>
      <div>
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
      </div>
    </section>
  )
}

export default Experience
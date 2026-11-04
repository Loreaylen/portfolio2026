import { useTranslation } from "react-i18next";
import type { ExperienceData } from "@/components/Experience/experience.types";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const { t } = useTranslation(['experience', 'translation'])

  const jobs = t('experience', { ns:'experience', returnObjects: true }) as Array<ExperienceData>

  return (
    <section id="experience" className="p-5 bg-background">
      <h2 className="text-3xl mb-3 text-text-primary">{t('experience.title', {ns:'translation'})}</h2>
      <ol className="relative border-s border-action">
      {
        jobs.map((job: ExperienceData, i: number) => (
          <ExperienceItem key={i} job={job}/>
        ))
      }
      </ol>
    </section>
  )
}

export default Experience
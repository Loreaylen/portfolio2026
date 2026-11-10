import { useTranslation } from "react-i18next";
import type { ExperienceData } from "@/components/Experience/experience.types";
import Section  from "../ui/Section";
import Heading from "../ui/Heading";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const { t } = useTranslation(['experience', 'translation'])

  const jobs = t('experience', { ns:'experience', returnObjects: true }) as Array<ExperienceData>

  return (
    <Section id="experience" className="bg-background">
      <Heading>{t('experience.title', {ns:'translation'})}</Heading>
      <ol className="relative border-s border-action">
      {
        jobs.map((job: ExperienceData, i: number) => (
          <ExperienceItem key={i} job={job}/>
        ))
      }
      </ol>
    </Section>
  )
}

export default Experience
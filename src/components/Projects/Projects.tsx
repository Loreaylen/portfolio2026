import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import type { ProjectData } from "@/components/Projects/projects.types";
import ProjectCard from "./ProjectCard"

const Projects = () => {

  const { t } = useTranslation('projects')
  const projects = t('projects', { returnObjects: true }) as Array<ProjectData>

  return (
    <Section id='projects' className="bg-background">
      <Heading>{t('title')}</Heading>
      <div className="flex flex-row flex-wrap py-5">
        {
          projects.map((project: ProjectData, i: number) => {
            return (<ProjectCard project={project} key={i} i={i}  /> )
          })
        }
      </div>
    </Section>
  )
}

export default Projects
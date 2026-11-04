import { useTranslation } from "react-i18next";
import type { ProjectData } from "@/components/Projects/projects.types";
import ProjectCard from "./ProjectCard"

const Projects = () => {

  const { t } = useTranslation('projects')
  const projects = t('projects', { returnObjects: true }) as Array<ProjectData>

  return (
    <section id='projects' className="bg-background p-5">
      <h2 className="text-text-primary text-3xl max-lg:text-2xl">{t('title')}</h2>
      <div className="flex flex-row flex-wrap">
        {
          projects.map((project: ProjectData, i: number) => {
            return (<ProjectCard project={project} key={i} i={i}  /> )
          })
        }
      </div>
    </section>
  )
}

export default Projects
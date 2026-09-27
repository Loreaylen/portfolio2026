import { useTranslation } from "react-i18next";
import type { ProjectData } from "@/types/projects";
import ProjectCard from "./ProjectCard"

const Projects = () => {

  const { t } = useTranslation('projects')
  const projects = t('projects', { ns: 'projects', returnObjects: true }) as Array<ProjectData>

  return (
    <section id='projects'>
      <h2>{t('title')}</h2>
      <div>
        {
          projects.map((project: ProjectData, i: number) => {
            return (<ProjectCard project={project} i={i} /> )
          })
        }
      </div>
    </section>
  )
}

export default Projects
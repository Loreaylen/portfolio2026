import { useTranslation } from "react-i18next";
import type { ProjectData } from "@/types/projects";
import githubIcon from "@/assets/icons/github.png"

const Projects = () => {

  const { t } = useTranslation(['projects', 'common'])

  const projects = t('projects', { ns: 'projects', returnObjects: true }) as Array<ProjectData>

  const actionUrls: Array<keyof Pick<ProjectData, 'githubUrl' | 'siteUrl' | 'demoUrl'>> = ['githubUrl', 'siteUrl', 'demoUrl']

  return (
    <section id='projects'>
      <h2>{t('title')}</h2>
      <div>
        {
          projects.map((project: ProjectData, i: number) => (
            <article key={i}>
              <div>
              <h3>{project.name}</h3>
              <img src={project.imageUrl} alt={project.imageAlt} />
              <p>{project.description}</p>
              </div>
              <div>
                {
                  project.technologies.map((tag: string, i: number) => (
                    <span key={i}>{tag}</span>
                  ))
                }
              </div>
              <div>
                {
                  actionUrls.map((action) => {
                    const url = project[action]
                    if (!url) return null

                    const label = action.slice(0, -3)
                    return (
                      <a key={action} href={url} target="_blank" aria-label={t(label, { ns: 'common' })}>
                        <img src={githubIcon} alt="" />
                      </a>
                    )
                  })
                }
              </div>
            </article>
          ))
        }

      </div>
    </section>
  )
}

export default Projects
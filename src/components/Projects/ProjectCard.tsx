import type { Action, ProjectData } from "@/types/projects";
import { useTranslation } from "react-i18next";
import githubIcon from "@/assets/icons/github.png"

const ProjectCard = ({ project, i }: { project: ProjectData; i: number }) => {
  const { t } = useTranslation(['projects', 'common'])
  const actionUrls: Action[] = ['githubUrl', 'siteUrl', 'demoUrl']

  return (
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
  )
}

export default ProjectCard;